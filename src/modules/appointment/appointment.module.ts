import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { AppointmentRepository } from './repositories/appointment.repository';

@Module({
  providers: [AppointmentService, AppointmentRepository],
  controllers: [AppointmentController],
})
export class AppointmentModule {}
