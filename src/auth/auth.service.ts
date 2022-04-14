import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async validateUser(email: string, password: string): Promise<Omit<User, 'password'> | null> {
        const user = await this.userService.findOne(email);

        //if (user && await bcrypt.compare(user.password, password)) {
        if (user && user.password === password) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { password, ...userData } = user;

            return userData;
        }

        return null;
    }

    async login(user: Omit<User, 'password'>) {
        const payload = Object.assign(user, { sub: user.id });

        return {
            access_token: await this.jwtService.sign(payload)
        }
    }
}
