import { Service } from '../../../entities';
import { ServiceDto } from '../dto/service.dto';
import { ServiceInterface } from '../interfaces/service.interface';

export class ServiceObject implements ServiceInterface {
  id: string;
  title: string;
  description?: string;
  price: number;
  duration: number;
  companyId: string;

  constructor(serviceDto: ServiceDto) {
    const service = new Service();

    service.title = serviceDto.title;
    service.description = serviceDto.description;
    service.price = serviceDto.price;
    service.duration = serviceDto.duration;
    service.companyId = serviceDto.companyId;

    return service;
  }
}
