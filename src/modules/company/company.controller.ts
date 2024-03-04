import { Controller, Get } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Get('getAllCompanies')
  getAllCompanies() {
    return this.companyService.getAllCompanies();
  }
}
