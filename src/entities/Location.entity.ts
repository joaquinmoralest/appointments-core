import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
  })
  id: string;

  @Column('varchar', {
    length: 60,
  })
  city: string;

  @Column('varchar', {
    length: 60,
  })
  commune: string;

  @Column('varchar', {
    length: 100,
  })
  street: string;

  @Column('varchar', {
    length: 8,
  })
  number: string;

  @Column('int')
  companyId: string;
}
