import { Appointment } from '../../../entities';
import { AppointmentInterface } from '../interfaces/appointment.interface';

export class AppointmentObj implements AppointmentInterface {
  id: string;
  datetime: Date;
  companyId: string;
  clientId: string;
  serviceId: string;

  constructor(appointmentDto) {
    const appointment = new Appointment();

    // const datetime = new Date(appointmentDto.datetime);
    // appointment.datetime = datetime;
    appointment.datetime = appointmentDto.datetime;
    appointment.clientId = appointmentDto.clientId;
    appointment.companyId = appointmentDto.companyId;
    appointment.serviceId = appointmentDto.serviceId;

    return appointment;
  }
}
