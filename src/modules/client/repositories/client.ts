import { ClientInterface } from '../interfaces/client';
import { AppDataSource } from '../../..';
import { Client } from '../../../entities/Client';
import { ClientObject } from '../models/client';

export class ClientRepository {
  clientRepository = AppDataSource.getRepository(Client);

  async getAllClients() {
    let getClients;

    try {
      getClients = await this.clientRepository.find();
    } catch (error) {
      console.log('Ha ocurrido un error: ', error);
    }

    const clients: ClientInterface[] = [];

    getClients.forEach((client) => clients.push(new ClientObject(client)));

    return clients;
  }

  async getClientById(clientId: string) {
    let getClient;

    try {
      getClient = await this.clientRepository.findOne({
        where: { id: clientId },
      });
    } catch (error) {
      console.log('No se encontre el cliente', error);
    }

    let client: ClientInterface = null;

    client = new ClientObject(getClient);
    return client;
  }

  async createClient(clientDto, entityManager): Promise<ClientInterface> {
    const clientToSave = new ClientObject(clientDto);

    let clientSaved;

    try {
      clientSaved = entityManager.save(clientToSave);
    } catch (error) {
      console.log('Error here, ' + error);
    }

    return clientSaved;
  }
}
