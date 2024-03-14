import { IsEmail, IsOptional, IsString } from 'class-validator';
import { ClientInterface } from '../interfaces/client.interface';

export class ClientDto implements ClientInterface {
  id: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  fullName: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  phone: string;
}
