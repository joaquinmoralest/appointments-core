import { AppDataSource } from '../../..';
import { Company } from '../../../entities/Company';
import { CompanyInterface } from '../interfaces/company';
import { CompanyObject } from '../models/company';

export class CompanyRepository {
  private companyRepository = AppDataSource.getRepository(Company);

  async getAllCompanies() {
    let getCompanies;

    try {
      getCompanies = await this.companyRepository.find();
    } catch (error) {
      console.log('No se han encontrado empresas', error);
    }

    const companies: CompanyInterface[] = [];
    getCompanies.forEach((company) =>
      companies.push(new CompanyObject(company)),
    );

    return companies;
  }

  async getCompanyById(companyId) {
    let getCompany;

    try {
      getCompany = await this.companyRepository.findOneBy({ id: companyId });
    } catch (error) {
      console.log('No se ha encontrado la compañia', error);
    }

    let company: CompanyInterface = null;
    company = new CompanyObject(getCompany);

    return company;
  }

  async createCompany(companyDto, entityManager) {
    const companyToSave = new CompanyObject(companyDto);
    console.log(companyToSave);

    let companySaved;
    try {
      companySaved = await entityManager.save(companyToSave);
    } catch (error) {
      console.log('No se pudo crear la empresa', error);
    }

    return companySaved;
  }
}
