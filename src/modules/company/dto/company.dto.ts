import { IsEmail, IsOptional } from 'class-validator';

export class CompanyDto {
  name: string;

  phone: string;

  @IsEmail()
  email: string;

  @IsOptional()
  url: string;

  logoUrl: string;

  @IsOptional()
  locationId: string;
}
