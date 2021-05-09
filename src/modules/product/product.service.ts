import { BadRequestException, Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
    constructor(private productRepository: ProductRepository) {}

    async create(product: Product) {
        const productdb = await this.productRepository.findOne({
            where: {
                category: product.category,
                name: product.name,
                client_id: product.client_id,
            },
        });
        if (productdb)
            throw new BadRequestException('Error al registrar producto');
        const newProduct = this.productRepository.create(product);
        const createdProduct = await this.productRepository.save(newProduct);

        return createdProduct;
    }

    async getByClient(clientId: number) {
        const listProducts = await this.productRepository.find({
            where: { client_id: clientId },
        });
        return listProducts;
    }
}
