import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { authRepository } from './auth.repository';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [
        TypeOrmModule.forFeature([authRepository]),
        PassportModule,
        JwtModule.register({
            secret: 'secreto',
            signOptions: { expiresIn: '1d' },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
