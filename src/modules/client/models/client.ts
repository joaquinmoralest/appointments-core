import { Client } from '../../../entities/Client';
import { ClientInterface } from '../interfaces/client';

export class ClientObject implements ClientInterface {
  id: string;
  firstName: string;
  lastName: string;
  fullName?: string;
  email?: string;
  phone?: string;
  constructor(clientDto) {
    const client: Client = new Client();

    client.firstName = clientDto.firstName;
    client.lastName = clientDto.lastName;
    client.fullName = client.firstName + ' ' + client.lastName;
    client.email = clientDto.email;
    client.phone = clientDto.phone;

    return client;
  }
}
