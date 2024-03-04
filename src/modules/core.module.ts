import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [ClientModule, CompanyModule],
})
export class CoreModule {}
