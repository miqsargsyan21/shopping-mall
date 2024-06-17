import { Category } from '../categories/categories.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  ForeignKey,
  BelongsTo,
  Column,
  Table,
  Model,
} from 'sequelize-typescript';

@Table
export class Product extends Model<Product> {
  @Column
  @ApiProperty({ description: 'Title of the product', example: 'iPhone 13' })
  title: string;

  @Column
  @ApiProperty({
    description: 'Description of the product',
    example: 'iPhone 13 description',
  })
  description: string;

  @Column({ unique: true })
  @ApiProperty({ description: 'SKU of the product', example: 'AN12N2J2' })
  sku: string;

  @Column
  @ApiProperty({ description: 'Price of the product', example: 500 })
  price: number;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;
}
