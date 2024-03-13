import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Service {
  @PrimaryGeneratedColumn('increment', {
    type: 'bigint',
  })
  id: string;

  @Column('varchar', {
    length: 60,
  })
  title: string;

  @Column('varchar', {
    length: 300,
  })
  description: string;

  @Column('bigint')
  price: number;

  @Column('int')
  duration: number;

  @Column('int')
  companyId: string;
}
