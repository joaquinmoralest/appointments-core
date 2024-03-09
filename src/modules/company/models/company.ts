import { Company } from '../../../entities/Company';
import { CompanyInterface } from '../interfaces/company';

export class CompanyObject implements CompanyInterface {
  id: string;
  name: string;
  phone: string;
  email: string;
  url?: string;
  logoUrl: string;
  locationId?: string;

  constructor(companyDto) {
    const company: Company = new Company();

    company.name = companyDto.name;
    company.phone = companyDto.phone;
    company.email = companyDto.email;
    company.logoUrl = companyDto.logoUrl;

    if (companyDto.url) {
      company.url = companyDto.url;
    }

    if (companyDto.locationId) {
      company.locationId = companyDto.locationId;
    }

    return company;
  }
}
