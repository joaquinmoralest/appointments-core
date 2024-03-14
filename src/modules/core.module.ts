import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { CompanyModule } from './company/company.module';
import { AppointmentModule } from './appointment/appointment.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [ClientModule, CompanyModule, AppointmentModule, ServiceModule],
})
export class CoreModule {}
