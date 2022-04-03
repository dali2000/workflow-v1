/* eslint-disable prettier/prettier */


import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()

  firstName: string;

  @Column()
  lastName: string;
  
  @Column({unique: true})
  Email: string;

  @Column()
  role: string;

  @Column()
  password: string;

  @Column()
  location: string;

  @Column({ default: true })
  isActive: boolean;
}

function Primary() {
  throw new Error('Function not implemented.');
}
