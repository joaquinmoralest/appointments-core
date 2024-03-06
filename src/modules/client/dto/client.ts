import { IsEmail, IsOptional } from 'class-validator';
import { ClientInterface } from '../interfaces/client';

export class ClientDto implements ClientInterface {
  id: string;
  firstName: string;
  lastName: string;

  @IsOptional()
  fullName: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  phone: string;
}
