import {Entity, Column, ManyToOne} from 'typeorm';
import AbstractEntity from './abstract.entity';
import {Example} from './example.entity';

@Entity('echos')
export class Echo extends AbstractEntity {
  @Column({nullable: false})
  public name!: string;

  @ManyToOne(() => Example, (example) => example.echos)
  public example!: Example;
}
