import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private readonly productModel: typeof Product,
  ) {}

  async findAll() {
    try {
      return await this.productModel.findAll({ include: ['category'] });
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async findOne(id: string) {
    try {
      return await this.productModel.findByPk(id, { include: ['category'] });
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async create(createProductDto: CreateProductDto) {
    try {
      return await this.productModel.create(createProductDto);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      return await this.productModel.update(updateProductDto, {
        where: { id },
      });
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async remove(id: string) {
    try {
      return await this.productModel.destroy({
        where: { id },
      });
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
