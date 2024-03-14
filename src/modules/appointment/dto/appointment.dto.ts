import { IsDate, IsString } from 'class-validator';
import { AppointmentInterface } from '../interfaces/appointment.interface';

export class AppointmentDto implements AppointmentInterface {
  id: string;

  @IsDate()
  datetime: Date;

  @IsString()
  companyId: string;

  @IsString()
  clientId: string;

  @IsString()
  serviceId: string;
}
