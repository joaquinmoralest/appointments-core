import { DataSource } from 'typeorm';
import { Client } from './entities/Client';
import 'reflect-metadata';
import { Company } from './entities/Company';
import { Location } from './entities/Location';
import { Appointment } from './entities/Appointment';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'booking',
  synchronize: true,
  entities: [Client, Company, Location, Appointment],
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
