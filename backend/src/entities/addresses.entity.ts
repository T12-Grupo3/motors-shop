import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { v4 as uuid } from "uuid";

@Entity("addresses")
export class Addresses {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 69 })
  street: string;

  @Column()
  zipCode: string;

  @Column()
  number: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  complement: string;
}
