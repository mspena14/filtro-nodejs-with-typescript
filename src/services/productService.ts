import { ProductRepository } from '../repositories/';
import { injectable, inject } from 'tsyringe';
import { ProductModel } from '../models';


@injectable()
export class ProductService {

    constructor(@inject('ProductRepository') private productRepository: ProductRepository){}

    async createProduct(product: Partial<ProductModel>): Promise<ProductModel>{
        return await this.productRepository.create(product)
    }

    async findAllProducts(): Promise<ProductModel[]>{
        return await this.productRepository.findAll()
    }

    async updateProduct(id: number, product: Partial<ProductModel>){
        return await this.productRepository.updateProduct(id, product)
    }

    async findById(id:number): Promise<ProductModel | null> {
			return await this.productRepository.findProductById(id)
	}

    async deleteProduct(id: number){
        return await this.productRepository.deleteProduct(id)
    }

    async updateStock(id: number, newStock: number){
        return await this.productRepository.updateProductStock(id, newStock)
    }
}

