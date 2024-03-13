import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn('increment', {
    type: 'bigint',
  })
  id: string;

  @Column('datetime')
  datetime: Date;

  @Column('bigint')
  serviceId: string;

  @Column('int')
  companyId: string;

  @Column('bigint')
  clientId: string;
}
