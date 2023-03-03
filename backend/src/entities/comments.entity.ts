import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, } from "typeorm";
  import { Exclude } from "class-transformer";
  import { v4 as uuid } from "uuid";
  import { ImageAdverts } from "./image_adverts.entity";
  import { User } from "./user.entity";
import { Adverts } from "./adverts.entity";
  
  @Entity("comments")
  export class Comments {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;
  
    @Column({ length: 200 })
    comments: string;

    @CreateDateColumn()
    createdAt_adverts: Date

    @UpdateDateColumn()
    updatedAt_adverts: Date
  
    @ManyToOne(()=> User, { cascade: true, onDelete: "CASCADE" })
    user: User

    @ManyToOne(()=> Adverts)
    adverts: Adverts

  }
    