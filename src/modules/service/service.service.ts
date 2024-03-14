import { Injectable } from '@nestjs/common';
import { ServiceRepository } from './repositories/service.repository';
import { ServiceInterface } from './interfaces/service.interface';
import { ServiceDto } from './dto/service.dto';
import { ResponseDto } from '../../dto/response.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class ServiceService {
  service: ServiceInterface;
  services: ServiceInterface[] = [];

  constructor(private serviceRepository: ServiceRepository) {}

  async getAllServices(): Promise<ResponseDto> {
    this.services = await this.serviceRepository.getAllServices();
    return { ok: true, data: this.services, message: 'Get All Services Ok!' };
  }

  async getServiceById(queryParams: any): Promise<ResponseDto> {
    const { id } = queryParams;
    this.service = await this.serviceRepository.getServiceById(id);
    return { ok: true, data: this.service, message: 'Get Service By Id Ok!' };
  }

  async createService(serviceDto: ServiceDto, entityManager: EntityManager): Promise<ResponseDto> {
    this.service = await this.serviceRepository.createService(serviceDto, entityManager);
    return { ok: true, data: this.service, message: 'Create Service Ok!' };
  }
}
