import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { IUser } from './interfaces/user.interface';
import { IDeleteUser } from './interfaces/delete.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @Post()
    create(@Body() createUser: CreateUserDto): Promise<IUser>{
        return this.userService.create(createUser);
    }
    
    @Get()
    getUser(): Promise<IUser[]>{
        return this.userService.get();
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto){
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string):Promise<IDeleteUser>{
        return this.userService.delete();
    }
}
