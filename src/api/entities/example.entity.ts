import { Entity, Column, OneToMany } from 'typeorm';
import AbstractEntity from './abstract.entity';
import { Echo } from './echo.entity';

@Entity('examples')
export class Example extends AbstractEntity {
  @Column({nullable: false})
  public name!: string;

  @OneToMany(() => Echo, (echo) => echo.example)
  public echos?: Echo[];
}
