import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsPositive,
  IsNotEmpty,
  IsString,
  IsNumber,
  Length,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ description: 'Title of the product', example: 'iPhone 13' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Description of the product',
    example: 'iPhone 13 description',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ description: 'SKU of the product', example: 'AN12N2J2' })
  @IsAlphanumeric()
  @Length(8, 8)
  sku: string;

  @ApiProperty({ description: 'Price of the product', example: 500 })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({ description: 'Category ID of the product', example: 1 })
  @IsNumber()
  @IsPositive()
  categoryId: number;
}
