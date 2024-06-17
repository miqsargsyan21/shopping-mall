import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Product } from '../products/products.entity';

@Table
export class Category extends Model<Category> {
  @Column
  title: string;

  @Column
  description: string;

  @HasMany(() => Product)
  products: Product[];
}
