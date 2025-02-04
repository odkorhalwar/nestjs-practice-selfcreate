import { Bind, Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  @Bind(Req())
  getHello(request: Request): any {
    return request.headers; //根据express的request获取请求相关的所有信息
  }
}
