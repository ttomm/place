import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { Request as ExpressRequest } from 'express'
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { User } from './user/user.entity';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private config: ConfigService,
  ) { }

  @Get()
  getHello(): string {
    return this.config.get('env');
  }

  @Post('/auth/login')
  @UseGuards(LocalAuthGuard)
  login(@Request() req: ExpressRequest) {
    return this.authService.login(req.user as Omit<User, 'password'>);
  }
}
