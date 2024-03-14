import { EntityManager } from 'typeorm';
import { AppDataSource } from '../../..';
import { Service } from '../../../entities';
import { ServiceDto } from '../dto/service.dto';
import { ServiceObject } from '../models/service.model';
import { ServiceInterface } from '../interfaces/service.interface';

export class ServiceRepository {
  private serviceRepository = AppDataSource.getRepository(Service);

  async getAllServices() {
    let getServices;

    try {
      getServices = await this.serviceRepository.find();
    } catch (error) {
      console.log('No se encontraron servicios', error);
    }

    const services: ServiceInterface[] = [];
    getServices.forEach((service) => {
      services.push(new ServiceObject(service));
    });

    return services;
  }

  async getServiceById(serviceId) {
    let getService;

    try {
      getService = await this.serviceRepository.findOne({ where: { id: serviceId } });
    } catch (error) {
      console.log('Ocurrio un error', error);
    }

    if (!getService) {
      throw new Error('No existe el servicio');
    } else {
      const service = new ServiceObject(getService);

      return service;
    }
  }

  async createService(serviceDto: ServiceDto, entityManager: EntityManager) {
    const serviceToSave = new ServiceObject(serviceDto);

    let serviceSaved;
    try {
      serviceSaved = await entityManager.save(serviceToSave);
    } catch (error) {
      console.log('No se pudo crear el servicio', error);
    }

    return serviceSaved;
  }
}
