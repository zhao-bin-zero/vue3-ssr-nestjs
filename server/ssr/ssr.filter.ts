import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import ssrServer from './ssr.server';

/**
 * 异常过滤器
 *
 * @export
 * @class SsrFilter
 * @implements {ExceptionFilter}
 */
@Catch()
export class SsrFilter implements ExceptionFilter {
  constructor() {}

  /**
   * catch
   *
   * @param {HttpException} exception
   * @param {ArgumentsHost} host
   * @memberof SsrFilter
   */
  public async catch(exception: HttpException, host: ArgumentsHost): Promise<any> {
    try {
      if (exception && !exception.hasOwnProperty('getStatus')) {
        const response: any = exception.getResponse();

        if (response.message.indexOf('Cannot GET /') === -1) {
          console.log(exception);
        }
      }

      const ctx: any = host.switchToHttp();
      const res: any = ctx.getResponse();
      const req: any = ctx.getRequest();
      const status: any = exception ? exception.getStatus() : HttpStatus.OK;

      if (status === HttpStatus.NOT_FOUND) {
        // console.log('Render========', HttpStatus.NOT_FOUND);
        if (!res.headersSent) {
          await ssrServer.render(req, res);
        }
      } else {
        // console.log('Render========', status);
        res.status(status).json({
          statusCode: status,
          timestamp: new Date().toISOString(),
          path: req.url
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
