import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { CartController } from './cart/cart.controller';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-mini-onlineshop'),
    ProductModule,
    UserModule,
    CategoryModule,
    CartModule,
  ],
  controllers: [AppController, CartController],
  providers: [AppService],
})
export class AppModule {}
