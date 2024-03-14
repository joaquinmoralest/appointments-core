import { AppointmentInterface } from './../interfaces/appointment.interface';
import { EntityManager } from 'typeorm';
import { AppDataSource } from '../../..';
import { Appointment } from '../../../entities';
import { AppointmentDto } from '../dto/appointment.dto';
import { AppointmentObj } from '../models/appointment.model';

export class AppointmentRepository {
  private appointmentRepository = AppDataSource.getRepository(Appointment);

  async getAllAppointments() {
    let getAppointments;

    try {
      getAppointments = await this.appointmentRepository.find();
    } catch (error) {
      console.log('No se encontraron reservas', error);
    }

    const appointments = [];
    getAppointments.forEach((appointment) => {
      appointments.push(new AppointmentObj(appointment));
    });

    return appointments;
  }

  async getAppointmentById(appointmentId: string) {
    let getAppointment;

    try {
      getAppointment = await this.appointmentRepository.findOne({ where: { id: appointmentId } });
    } catch (error) {
      console.log('No se a encontrado la reserva', error);
    }

    let appointment: AppointmentInterface = null;
    appointment = new AppointmentObj(getAppointment);

    return appointment;
  }

  async createAppointment(appointmentDto: AppointmentDto, entiTyManager: EntityManager) {
    const appointmentToSave = new AppointmentObj(appointmentDto);

    let appointmentSaved;
    try {
      appointmentSaved = await entiTyManager.save(appointmentToSave);
    } catch (error) {
      console.log('No se pudo crear la reserva', error);
    }

    return appointmentSaved;
  }
}
