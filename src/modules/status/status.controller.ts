import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Role, Roles } from '../auth/role/role.decorator';
import { RolesGuard } from '../auth/role/role.guard';
import { Status } from './status.entity';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController {
    constructor(private statusService: StatusService) {}

    @Roles(Role.ADMINISTRADOR, Role.VENDEDOR)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post('create')
    async create(@Body() status: Status) {
        const result = await this.statusService.create(status);
        return result;
    }

    @Roles(Role.ADMINISTRADOR, Role.VENDEDOR)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get('list/client/:id')
    async getByClient(@Param() params) {
        const result = await this.statusService.getByClient(params.id);
        return result;
    }
}
