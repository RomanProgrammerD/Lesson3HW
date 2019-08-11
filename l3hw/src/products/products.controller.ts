import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { IProduct } from './interfaces/product.interface';
import { IDeleteProduct } from './interfaces/delete.interface';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService){}

    @Post()
    create(@Body() createProduct: CreateProductDto): Promise<IProduct>{
        return this.productService.create(createProduct);
    }

    @Get()
    getProduct(): Promise<IProduct[]>{
        return this.productService.get();
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateProductDto: CreateProductDto){
        return this.productService.update(id, updateProductDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string):IDeleteProduct{
        return {message: 'success'};
    }
}
