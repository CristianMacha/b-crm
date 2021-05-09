import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Role, Roles } from '../auth/role/role.decorator';
import { RolesGuard } from '../auth/role/role.guard';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Roles(Role.ADMINISTRADOR, Role.VENDEDOR)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post('create')
    async create(@Body() product: Product) {
        const result = await this.productService.create(product);
        return result;
    }

    @Roles(Role.ADMINISTRADOR, Role.VENDEDOR)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get('list/client/:id')
    async getByClient(@Param() params) {
        const result = await this.productService.getByClient(params.id);
        return result;
    }
}
