import { ProductsController } from './products.controller';
import { Category } from '../categories/categories.entity';
import { ProductsService } from './products.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './products.entity';
import { Module } from '@nestjs/common';

@Module({
  imports: [SequelizeModule.forFeature([Product, Category])],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
