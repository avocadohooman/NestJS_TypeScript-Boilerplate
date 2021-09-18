import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// basic controller that handles requests from base domain e.g. www.app.com/
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
