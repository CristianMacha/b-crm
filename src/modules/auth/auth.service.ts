import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { User } from '../user/user.entity';
import { authRepository } from './auth.repository';

@Injectable()
export class AuthService {
    constructor(
        private authRepository: authRepository,
        private jwtService: JwtService,
    ) {}

    async signin(user: User) {
        const userdb = await this.authRepository.findOne({
            where: { email: user.email },
        });
        if (!userdb)
            throw new BadRequestException('Credenciales incorrectos - email.');

        const macthedPassword = await bcrypt.compare(
            user.password,
            userdb.password,
        );
        if (!macthedPassword)
            throw new BadRequestException(
                'Credenciales incorrectos. - password',
            );

        const access_token = await this.generateToken(
            userdb.id,
            userdb.email,
            userdb.dni,
            userdb.role,
        );

        return { access_token };
    }

    async getUserAuthenticated(userAuth: any) {
        const userdb = await this.authRepository.findOne({
            where: { email: userAuth.email },
        });
        if (!userdb) throw new UnauthorizedException();

        const access_token = await this.generateToken(
            userdb.id,
            userdb.email,
            userdb.dni,
            userdb.role,
        );
        return { access_token, userdb };
    }

    async generateToken(
        id: number,
        email: string,
        dni: string,
        role: string,
    ): Promise<string> {
        const access_token = this.jwtService.signAsync({
            id,
            email,
            dni,
            role,
        });
        return access_token;
    }
}
