import {
  IsString,
  IsInt,
  IsOptional,
  IsArray,
  ArrayNotEmpty,
  ArrayUnique,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  title!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsInt()
  priceCents!: number;

  @IsInt()
  @IsOptional()
  inventory?: number;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @IsString({ each: true })
  media!: string[];
}
