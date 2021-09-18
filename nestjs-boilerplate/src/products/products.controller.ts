import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

	constructor(private readonly productsService: ProductsService) {}
	
	@Post()
	addProduct(
		@Body('title') prodTitle: string,
		@Body('description') prodDesc: string,
		@Body('price') prodPrice: number,
		) {
		const generateId = this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);
		return { id:  generateId};
	}
	
	@Get()
	getAllProducts() {
		const allProducts = this.productsService.returnAllProducts();
		return allProducts;
	}

	@Get(':id')
	getOneProduct(@Param('id') prodId: string) {
		const singleProduct = this.productsService.returnOneProduct(prodId);
		return singleProduct;
	}

}
