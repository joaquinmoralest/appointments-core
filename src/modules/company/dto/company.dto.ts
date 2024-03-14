import { IsEmail, IsOptional, IsString } from 'class-validator';
import { CompanyInterface } from '../interfaces/company.interface';

export class CompanyDto implements CompanyInterface {
  id: string;

  @IsString()
  name: string;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  url: string;

  @IsString()
  logoUrl: string;

  @IsOptional()
  locationId: string;
}
