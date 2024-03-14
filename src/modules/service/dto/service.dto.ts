import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ServiceInterface } from '../interfaces/service.interface';

export class ServiceDto implements ServiceInterface {
  id: string;

  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  price: number;

  @IsNumber()
  duration: number;

  @IsString()
  companyId: string;
}
