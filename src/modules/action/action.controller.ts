import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Role, Roles } from '../auth/role/role.decorator';
import { RolesGuard } from '../auth/role/role.guard';
import { Action } from './action.entity';
import { ActionService } from './action.service';

@Controller('action')
export class ActionController {
    constructor(private actionService: ActionService) {}

    @Roles(Role.ADMINISTRADOR, Role.VENDEDOR)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post('create')
    async create(@Body() action: Action) {
        const result = await this.actionService.create(action);
        return result;
    }

    @Roles(Role.ADMINISTRADOR, Role.VENDEDOR)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get('list/client/:id')
    async getByClient(@Param() params) {
        const result = await this.actionService.getByClient(params.id);
        return result;
    }
}
