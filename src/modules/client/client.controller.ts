import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { Response } from 'express';
import { AppDataSource } from '../..';
import { ClientDto } from './dto/client';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Get('getAllClients')
  async getAllClients(@Res() res: Response) {
    const clients = await this.clientService.getAllClients();
    return res.status(HttpStatus.OK).send(clients);
  }

  @Get('getClientById')
  async getClientById(@Query() queryParams, @Res() res: Response) {
    const client = await this.clientService.getClientById(queryParams);
    return res.status(HttpStatus.OK).send(client);
  }

  @Post('createClient')
  async createClient(@Body() clientDto: ClientDto, @Res() res: Response) {
    return AppDataSource.manager.transaction(async (entityManager) => {
      const client = await this.clientService.createClient(
        clientDto,
        entityManager,
      );
      return res.status(HttpStatus.OK).send(client);
    });
  }
}
