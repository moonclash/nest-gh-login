import { Controller, Get, Request, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor (private readonly appService: AppService) {}

  @Get()
  getHello (): string {
    return this.appService.getHello()
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile (@Request() req): any {
    return req.user
  }
}
