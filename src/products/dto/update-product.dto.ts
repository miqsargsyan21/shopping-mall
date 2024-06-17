import { CreateProductDto } from './create-product.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiPropertyOptional({
    description: 'Title of the product',
    example: 'iPhone 14',
  })
  title?: string;

  @ApiPropertyOptional({
    description: 'Description of the product',
    example: 'iPhone 14 description',
  })
  description?: string;

  @ApiPropertyOptional({
    description: 'SKU of the product',
    example: 'B1A4S4X1',
  })
  sku?: string;

  @ApiPropertyOptional({ description: 'Price of the product', example: 600 })
  price?: number;

  @ApiPropertyOptional({
    description: 'Category ID of the product',
    example: 1,
  })
  categoryId?: number;
}
