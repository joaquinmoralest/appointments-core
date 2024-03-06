import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
  })
  id: string;

  @Column('varchar', {
    length: 60,
  })
  name: string;

  @Column('varchar', {
    length: 12,
  })
  phone: string;

  @Column('varchar', {
    length: 200,
  })
  url: string;

  @Column('varchar', {
    length: 200,
  })
  logoUrl: string;

  @Column('int')
  locationId: string;
}
