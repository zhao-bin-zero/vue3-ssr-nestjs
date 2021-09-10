import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';
import ssrServer from './ssr/ssr.server';
import { SsrFilter } from './ssr/ssr.filter';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  console.log(process.env.NODE_ENV);
  await ssrServer.init(app);
  app.useGlobalFilters(new SsrFilter());

  await app.listen('8888', '', () => {
    console.log('程序启动');
  });
}

bootstrap().catch((err) => {
  console.log(err);
  // process.exit(1)/
});
