import { Injectable } from '@nestjs/common';
// import { CreateClientDB } from './models/client.model';
import { ClientRepository } from './repositories/client';
import { ClientInterface } from './interfaces/client';
import { EntityManager } from 'typeorm';

@Injectable({})
export class ClientService {
  client: ClientInterface = null;
  clients: ClientInterface[] = null;

  constructor(private clientRepository: ClientRepository) {}

  async getAllClients() {
    this.clients = await this.clientRepository.getAllClients();
    return { ok: true, data: this.clients, message: 'Get All Clients Ok!' };
  }

  async getClientById(queryParams) {
    const { clientId } = queryParams;

    this.client = await this.clientRepository.getClientById(clientId);
    return { ok: true, data: this.client, message: 'Get Client By Id Ok!' };
  }

  async createClient(clientDto, entityManager: EntityManager) {
    this.client = await this.clientRepository.createClient(
      clientDto,
      entityManager,
    );
    return { ok: true, data: this.client, message: 'Create Client Ok!' };
  }
}
