import { Body, Controller, Get, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { Response } from 'express';
import { AppointmentDto } from './dto/appointment.dto';
import { AppDataSource } from '../..';
import { validate } from 'class-validator';

@Controller('appointment')
export class AppointmentController {
  constructor(private appointmentService: AppointmentService) {}

  @Get('getAllAppointments')
  async getAllAppointments(@Res() res: Response) {
    const appointments = await this.appointmentService.getAllAppointments();
    return res.status(HttpStatus.OK).send(appointments);
  }

  @Get('getAppointmentById')
  async getAppointmentById(@Query() queryParams: any, @Res() res: Response) {
    const appointment = await this.appointmentService.getAppointmentById(queryParams);
    return res.status(HttpStatus.OK).send(appointment);
  }

  @Post('createAppointment')
  async createAppointment(@Body() appointmentData: any, @Res() res: Response) {
    appointmentData.datetime = new Date(appointmentData.datetime);

    // Validar los datos de la cita con el DTO
    // Crear el DTO con los datos de la cita
    const appointmentDto = new AppointmentDto();
    appointmentDto.datetime = appointmentData.datetime;
    appointmentDto.companyId = appointmentData.companyId;
    appointmentDto.clientId = appointmentData.clientId;
    appointmentDto.serviceId = appointmentData.serviceId;
    const errors = await validate(appointmentDto);

    // Verificar si hay errores de validación
    if (errors.length > 0) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: errors, error: 'Bad Request', statusCode: HttpStatus.BAD_REQUEST });
    }

    return AppDataSource.manager.transaction(async (entityManager) => {
      const appointment = await this.appointmentService.createAppointment(appointmentDto, entityManager);
      return res.status(HttpStatus.OK).send(appointment);
    });
  }
}
