import { Entity, Column,  PrimaryGeneratedColumn, OneToOne, ManyToOne } from "typeorm";
import { Adverts } from "./adverts.entity";

@Entity("image_adverts")
export class ImageAdverts{
    @PrimaryGeneratedColumn("uuid")

    readonly id: string

    @Column()
    galery_image: string

    @ManyToOne(()=> Adverts)
    advert: Adverts

}
