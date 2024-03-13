import { Injectable } from '@nestjs/common';
import { CompanyInterface } from './interfaces/company.interface';
import { CompanyRepository } from './repositories/company.repository';
import { EntityManager } from 'typeorm';

@Injectable({})
export class CompanyService {
  private company: CompanyInterface = null;
  private companies: CompanyInterface[] = null;

  constructor(private companyRepository: CompanyRepository) {}

  async getAllCompanies() {
    this.companies = await this.companyRepository.getAllCompanies();
    return { ok: true, data: this.companies, message: 'Get All Companies Ok!' };
  }

  async getCompanyById(queryParams) {
    const { companyId } = queryParams;
    this.company = await this.companyRepository.getCompanyById(companyId);
    return { ok: true, data: this.company, message: 'Get Company By Id Ok!' };
  }

  async createCompany(companyDto, entityManager: EntityManager) {
    this.company = await this.companyRepository.createCompany(
      companyDto,
      entityManager,
    );
    return { ok: true, data: this.company, message: 'Create Company Ok!' };
  }
}
