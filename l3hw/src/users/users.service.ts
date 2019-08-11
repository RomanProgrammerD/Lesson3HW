import { Injectable } from '@nestjs/common';
import { IUser } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel) {}

    async create(user: IUser){
        const newUser = this.userModel(user);
        return await newUser.save();
    }

    async get(){
        const user = await this.userModel.find();
        return user;
    }

    async update(id: string, user: IUser): Promise<IUser>{
        return await this.userModel.findByIdAndUpdate(id, user, { new: true });
    }

    async delete(){
        return await {message: "success"};
    }
}
