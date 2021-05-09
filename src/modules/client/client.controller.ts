import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Role, Roles } from '../auth/role/role.decorator';
import { RolesGuard } from '../auth/role/role.guard';
import { Client } from './client.entity';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
    constructor(private clientService: ClientService) {}

    @Roles(Role.ADMINISTRADOR, Role.VENDEDOR)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post('create')
    async create(@Body() client: Client) {
        const result = await this.clientService.create(client);
        return result;
    }

    @Roles(Role.ADMINISTRADOR, Role.VENDEDOR)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get('list')
    async getAll(@Req() req) {
        const result = await this.clientService.getAll(
            req.user.role,
            req.user.id,
        );
        return result;
    }
}
