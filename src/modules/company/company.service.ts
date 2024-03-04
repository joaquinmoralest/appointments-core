import { Injectable } from '@nestjs/common';

@Injectable({})
export class CompanyService {
  getAllCompanies() {
    return [
      {
        name: 'company 1',
      },
      {
        name: 'company 2',
      },
    ];
  }
}
