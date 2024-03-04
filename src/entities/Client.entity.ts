import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: string;

  @Column('varchar', { length: 130, nullable: true })
  fullName: string | null;

  @Column('varchar', { length: 60 })
  firstName: string;

  @Column('varchar', { length: 60 })
  lastName: string;

  @Column('varchar', { length: 100, nullable: true })
  email: string | null;

  @Column('varchar', { length: 12, nullable: true })
  phone: string | null;
}
