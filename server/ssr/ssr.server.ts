import { readFileSync } from 'fs';
import { resolve } from 'path';

/**
 * SSR服务
 *
 * @export
 * @class SsrServer
 */
class SsrServer {
  private isTest: boolean;
  private isProd: boolean;
  private vueTemplate: string;
  private manifest: object;
  private vite: any;
  constructor() {
    this.isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD;
    this.isProd = process.env.NODE_ENV === 'production';
    this.vueTemplate = this.isProd
      ? readFileSync(this.resolve('web/client/index.html'), 'utf-8')
      : readFileSync(this.resolve('index.html'), 'utf-8');
    this.manifest = this.isProd ? require(this.resolve('web/client/ssr-manifest.json')) : {};
  }
  resolve(path: string) {
    return resolve(__dirname, '../../', path);
  }
  async init(app) {
    if (!this.isProd) {
      this.vite = await require('vite').createServer({
        root: process.cwd(),
        logLevel: this.isTest ? 'error' : 'info',
        server: {
          middlewareMode: true
        }
      });
      // use vite's connect instance as middleware
      app.use(this.vite.middlewares);
    } else {
      app.use(require('compression')());
      app.use(
        require('serve-static')(this.resolve('web/client'), {
          index: false
        })
      );
    }
  }
  async render(req, res) {
    try {
      const url = req.originalUrl;

      let template, render;
      if (!this.isProd) {
        // always read fresh template in dev
        template = await this.vite.transformIndexHtml(url, this.vueTemplate);
        render = (await this.vite.ssrLoadModule('/web/src/entry-server.js')).render;
      } else {
        template = this.vueTemplate;
        render = require(this.resolve('web/server/entry-server.js')).render;
      }

      const [appHtml, state, links] = await render(url, this.manifest);
      // console.log({template, appHtml, state, links})
      // appHtml为空说明vue项目不存在该路由，应去往404
      if (appHtml) {
        const html = template
          .replace(`<!--preload-links-->`, links)
          .replace(`'<vuex-state>'`, state)
          .replace(`<!--app-html-->`, appHtml);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
      } else {
        res.status(404).set({ 'Content-Type': 'text/html' }).end('404 页面不存在');
      }
    } catch (e) {
      this.vite && this.vite.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  }
}
const ssrServer = new SsrServer();
export default ssrServer;
