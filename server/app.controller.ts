import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * App controller
 *
 * @export
 * @class AppController
 */
@Controller()
export class AppController {
  constructor(private appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  public test(): string {
    return this.appService.test();
  }

  @Get('/find')
  public async findAll(): Promise<string> {
    return this.appService.findAll();
  }
}
