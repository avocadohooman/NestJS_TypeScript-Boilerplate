import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
	products: Product[] = [];

	insertProduct(title: string, desc: string, price: number) {
		const prodId = this.products.length + Math.random().toString();
		const newProduct = new Product(prodId, title, desc, price);
		this.products.push(newProduct);
		return prodId;
	}

	returnAllProducts() { 
		return [...this.products];
	}
	
	returnOneProduct(id: string) { 
		const product = this.products.find(p => p.id === id);
		if (!product) {
			return {error: "product not found"};
		}
		return {...product};
	}

	updateProduct(id: string, title: string, desc: string, price: number) {
		const findProduct = this.products.find(p => p.id === id);
		const index = this.products.findIndex(p => p.id === id)
		if (!findProduct) {
			return {error: "product not found"};
		}
		if (title) {
			this.products[index].title = title;
		}
		if (desc) {
			this.products[index].description = desc;
		}
		if (price) {
			this.products[index].price = price;
		}
		return this.products[index];
	}

	deleteProduct(id: string) {
		const index = this.products.findIndex(p => p.id === id)
		this.products.splice(index, 1);
		return null;
	}
}