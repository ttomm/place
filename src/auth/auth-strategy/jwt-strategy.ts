import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { TokenPayload } from '../token-payload.interface';
import { User } from 'src/user/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get('JWT_SECRET_KEY'),
            ignoreExpiration: false,
        });
    }

    async validate(payload: TokenPayload): Promise<Omit<User, "password">> {
        return { id: payload.sub, email: payload.email, role: payload.role };
    }
}