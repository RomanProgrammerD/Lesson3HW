import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
/*import { UsersController } from './users/users.controller';
import { ProductsController } from './products/products.controller';
import { UsersService } from './users/users.service';
import { ProductsService } from './products/products.service';*/
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [UsersModule, ProductsModule, MongooseModule.forRoot(config.mongoURL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
