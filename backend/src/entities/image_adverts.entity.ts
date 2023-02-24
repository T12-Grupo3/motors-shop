import { Entity, Column,  PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Exclude } from "class-transformer";
import { v4 as uuid} from "uuid";
import { Adverts } from "./adverts.entity";

@Entity("image_adverts")
export class ImageAdverts{
@PrimaryGeneratedColumn("uuid")

readonly id: string

@Column({length: 200})
image_adverts: string

@Column({length: 240})
description_image: string

@CreateDateColumn()
createdAt_adverts: Date

@UpdateDateColumn()
updatedAt_adverts: Date

@ManyToOne(()=> Adverts)
advert: Adverts

}
