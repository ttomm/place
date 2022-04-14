import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions, JwtOptionsFactory } from '@nestjs/jwt';

@Injectable()
export class JwtModuleOptionsFactory implements JwtOptionsFactory {
    constructor(private configService: ConfigService) { }

    createJwtOptions(): JwtModuleOptions | Promise<JwtModuleOptions> {
        return {
            secret: this.configService.get('JWT_SECRET_KEY'),
            signOptions: {
                expiresIn: 360
            }
        };
    }
}
