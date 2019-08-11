import { Injectable } from '@nestjs/common';
import { IProduct } from './interfaces/product.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
    constructor(@InjectModel('Product') private readonly productModel) {}

    async create(product: IProduct){
        const newProduct = this.productModel(product);
        return await newProduct.save();
    }

    async get(){
        const product = await this.productModel.find();
        return product;
    }

    async update(id: string, product: IProduct): Promise<IProduct>{
        return await this.productModel.findByIdAndUpdate(id, product, { new: true });
    }
}
