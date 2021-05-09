import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Role, Roles } from '../auth/role/role.decorator';
import { RolesGuard } from '../auth/role/role.guard';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Roles(Role.ADMINISTRADOR)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post('create')
    async create(@Body() user: User) {
        return await this.userService.create(user);
    }
}
