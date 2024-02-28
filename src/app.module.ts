import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [AuthModule, CompanyModule, ClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
