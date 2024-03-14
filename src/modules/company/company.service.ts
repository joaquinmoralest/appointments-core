import { Injectable } from '@nestjs/common';
import { CompanyInterface } from './interfaces/company.interface';
import { CompanyRepository } from './repositories/company.repository';
import { EntityManager } from 'typeorm';
import { CompanyDto } from './dto/company.dto';
import { ResponseDto } from '../../dto/response.dto';

@Injectable({})
export class CompanyService {
  private company: CompanyInterface = null;
  private companies: CompanyInterface[] = null;

  constructor(private companyRepository: CompanyRepository) {}

  async getAllCompanies(): Promise<ResponseDto> {
    this.companies = await this.companyRepository.getAllCompanies();
    return { ok: true, data: this.companies, message: 'Get All Companies Ok!' };
  }

  async getCompanyById(queryParams): Promise<ResponseDto> {
    const { companyId } = queryParams;
    this.company = await this.companyRepository.getCompanyById(companyId);
    return { ok: true, data: this.company, message: 'Get Company By Id Ok!' };
  }

  async createCompany(companyDto: CompanyDto, entityManager: EntityManager): Promise<ResponseDto> {
    this.company = await this.companyRepository.createCompany(companyDto, entityManager);
    return { ok: true, data: this.company, message: 'Create Company Ok!' };
  }
}
