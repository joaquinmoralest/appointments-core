import { DataSource } from 'typeorm';
import { Client } from './entities/Client.entity';
import 'reflect-metadata';
import { Company } from './entities/Company.entity';
import { Location } from './entities/Location.entity';
import { Appointment } from './entities/Appointment.entity';
import { Service } from './entities';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'booking',
  synchronize: true,
  entities: [Client, Company, Location, Appointment, Service],
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
