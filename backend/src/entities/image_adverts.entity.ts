import { Entity, Column,  PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Adverts } from "./adverts.entity";

@Entity("image_adverts")
export class ImageAdverts{
@PrimaryGeneratedColumn("uuid")

readonly id: string

@Column({length: 200})
image_adverts: string

@ManyToOne(()=> Adverts)
advert: Adverts

}
