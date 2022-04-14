import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Request as ExpressRequest } from 'express';

@Controller('user')
export class UserController {

    @UseGuards(JwtAuthGuard)
    @Get()
    getCurrentUser(@Request() req: ExpressRequest) {
        return req.user;
    }
}
