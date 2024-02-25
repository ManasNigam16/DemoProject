import {
  Controller,
  Get,
  HttpCode,
  Param,
  Query,
  Redirect,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('details')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  @HttpCode(206)
  create(): string {
    return this.appService.getHello();
  }

  @Get('name')
  getName(): string {
    return this.appService.getName();
  }

  @Get('age/:age')
  getAge(@Param() params: any): string {
    return `This is your age : ${params.age}`;
  }

  @Get('nestjsDoc')
  @Redirect('https://nestjs.com', 301)
  redirect(): string {
    return 'Redirecting to nestjs docs';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com/v5', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    return `This action returns a #${params.id} cat`;
  }
}
