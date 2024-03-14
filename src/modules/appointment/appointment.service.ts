import { Injectable } from '@nestjs/common';
import { ResponseDto } from '../../dto/response.dto';
import { AppointmentRepository } from './repositories/appointment.repository';
import { AppointmentDto } from './dto/appointment.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class AppointmentService {
  private appointment;
  private appointments = [];

  constructor(private appointmentRepository: AppointmentRepository) {}

  async getAllAppointments(): Promise<ResponseDto> {
    this.appointments = await this.appointmentRepository.getAllAppointments();
    return { ok: true, data: this.appointments, message: 'Get All Appointments Ok!' };
  }

  async getAppointmentById(queryParams: any): Promise<ResponseDto> {
    const { id } = queryParams;
    this.appointment = await this.appointmentRepository.getAppointmentById(id);
    return { ok: true, data: this.appointment, message: 'Get Appointment By Id Ok!' };
  }

  async createAppointment(appointmentDto: AppointmentDto, entityManager: EntityManager): Promise<ResponseDto> {
    this.appointment = await this.appointmentRepository.createAppointment(appointmentDto, entityManager);
    return { ok: true, data: this.appointment, message: 'Create Appointment Ok!' };
  }
}
