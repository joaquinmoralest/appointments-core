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
    length: 100,
  })
  email: string;

  @Column('varchar', {
    length: 200,
    nullable: true,
  })
  url: string;

  @Column('varchar', {
    length: 200,
  })
  logoUrl: string;

  @Column('int', { nullable: true })
  locationId: string;
}
