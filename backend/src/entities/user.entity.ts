import {  Column,  PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, Entity, JoinColumn, OneToMany } from "typeorm";
import { Exclude } from "class-transformer"
import { Addresses } from "./addresses.entity";
import { Adverts } from "./adverts.entity";
import { Comments } from "./comments.entity";

@Entity("user")
export class User{
@PrimaryGeneratedColumn("uuid")
readonly id: string

@Column({length: 200})
name: string

@Column({length: 69, unique: true})
email: string

@Column({length: 120})
@Exclude()
password: string

@Column({length: 69})
cpf: string

@Column({length: 69})
phone_number: string

@Column({length: 200})
description_user: string

@CreateDateColumn()
birth_date: Date

@CreateDateColumn()
createdAt: Date

@UpdateDateColumn()
updatedAt: Date

@Column({default: false})
isAdm: boolean

@Column({default: true})
isActive: boolean


@OneToOne(()=> Addresses,{eager:true})@JoinColumn()
address: Addresses

@OneToMany(() => Adverts, (adverts) => adverts.user, {
    eager: true,
    onDelete: "CASCADE",
  })
  adverts: Adverts[];

@OneToMany(() => Comments, (comments) => comments.user, {
eager: true,
onDelete: "CASCADE",
})
comments: Comments[];


}