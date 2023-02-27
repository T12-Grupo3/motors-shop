import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Exclude } from "class-transformer";
import { v4 as uuid } from "uuid";
import { ImageAdverts } from "./image_adverts.entity";

@Entity("adverts")
export class Adverts {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 200 })
  title_adverts: string;

  @Column({ length: 10 })
  year_adverts: string;

  @Column({ length: 50 })
  type_adverts: string;

  @Column({ length: 50 })
  type_veicule: string;

  @Column({ length: 20 })
  kilometers_adverts: string;

  @Column()
  price_adverts: number;

  @Column({ length: 240 })
  description_adverts: string;

  @Column({ default: true })
  isAvailable: boolean;

  @CreateDateColumn()
  createdAt_adverts: Date;

  @UpdateDateColumn()
  updatedAt_adverts: Date;

  @OneToMany(() => ImageAdverts, (imagesAdverts) => imagesAdverts.advert, {
    eager: true,
    onDelete: "CASCADE",
  })
  imageAdverts: ImageAdverts[];
}
