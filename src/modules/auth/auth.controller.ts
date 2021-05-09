import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { User } from '../user/user.entity';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signin')
    async signin(@Body() user: User) {
        const result = await this.authService.signin(user);
        return result;
    }

    @UseGuards(JwtAuthGuard)
    @Get('authenticated')
    async authenticated(@Req() req) {
        const result = await this.authService.getUserAuthenticated(req.user);
        return result;
    }
}
