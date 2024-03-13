import { IsEmail, IsOptional, IsString } from 'class-validator';
import { ClientInterface } from '../interfaces/client.interface';

export class ClientDto implements ClientInterface {
  id: string;
  firstName: string;
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
