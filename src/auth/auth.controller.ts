import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    // @UseGuards(AuthGuard('local'))
    // @Post('login')
    // login(@Request() req) {
    //     console.log('authctrl')
    //     return req.user;
    // }
}
