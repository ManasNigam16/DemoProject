import { Controller, Get, Param, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('details')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  findAll(): string {
    return this.appService.getHello();
  }

  @Get('name')
  getName(): string {
    return this.appService.getName();
  }

  @Get('age')
  // @Redirect('https://docs.nestjs.com', 302)
  getAge(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
