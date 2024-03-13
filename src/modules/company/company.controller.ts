import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { Response } from 'express';
import { CompanyDto } from './dto/company.dto';
import { AppDataSource } from '../..';

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Get('getAllCompanies')
  async getAllCompanies(@Res() res: Response) {
    const companies = await this.companyService.getAllCompanies();
    return res.status(HttpStatus.OK).send(companies);
  }

  @Get('getCompanyById')
  async getCompanyById(@Query() queryParams, @Res() res: Response) {
    const company = await this.companyService.getCompanyById(queryParams);
    return res.status(HttpStatus.OK).send(company);
  }

  @Post('createCompany')
  async createCompany(@Body() companyDto: CompanyDto, @Res() res: Response) {
    return AppDataSource.manager.transaction(async (entityManager) => {
      const company = await this.companyService.createCompany(
        companyDto,
        entityManager,
      );
      return res.status(HttpStatus.OK).send(company);
    });
  }
}
