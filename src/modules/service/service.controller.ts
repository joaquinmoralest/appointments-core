import { Body, Controller, Get, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceDto } from './dto/service.dto';
import { Response } from 'express';
import { AppDataSource } from '../..';

@Controller('service')
export class ServiceController {
  constructor(private serviceService: ServiceService) {}

  @Get('getAllServices')
  async getAllServices(@Res() res: Response) {
    const services = await this.serviceService.getAllServices();
    return res.status(HttpStatus.OK).send(services);
  }

  @Get('getServiceById')
  async getServiceById(@Query() queryParams, @Res() res: Response) {
    const service = await this.serviceService.getServiceById(queryParams);
    return res.status(HttpStatus.OK).send(service);
  }

  @Post('createService')
  async createService(@Body() serviceDto: ServiceDto, @Res() res: Response) {
    return AppDataSource.manager.transaction(async (entityManager) => {
      const service = await this.serviceService.createService(serviceDto, entityManager);
      return res.status(HttpStatus.OK).send(service);
    });
  }
}
