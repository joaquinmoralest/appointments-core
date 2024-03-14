import { Injectable } from '@nestjs/common';
import { ClientRepository } from './repositories/client.repository';
import { ClientInterface } from './interfaces/client.interface';
import { EntityManager } from 'typeorm';
import { ClientDto } from './dto';
import { ResponseDto } from '../../dto/response.dto';

@Injectable({})
export class ClientService {
  client: ClientInterface = null;
  clients: ClientInterface[] = null;

  constructor(private clientRepository: ClientRepository) {}

  async getAllClients(): Promise<ResponseDto> {
    this.clients = await this.clientRepository.getAllClients();
    return { ok: true, data: this.clients, message: 'Get All Clients Ok!' };
  }

  async getClientById(queryParams): Promise<ResponseDto> {
    const { clientId } = queryParams;

    this.client = await this.clientRepository.getClientById(clientId);
    return { ok: true, data: this.client, message: 'Get Client By Id Ok!' };
  }

  async createClient(clientDto: ClientDto, entityManager: EntityManager): Promise<ResponseDto> {
    this.client = await this.clientRepository.createClient(clientDto, entityManager);
    return { ok: true, data: this.client, message: 'Create Client Ok!' };
  }
}
