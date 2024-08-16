import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  username: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    length: 100
  })
  password: string;

  @Column({
    nullable: true,
  })
  logo_url: string;

  @Column({
    type: "timestamp",
    nullable: true
  })
  email_verified_at: string;

  @Column({
    type: "timestamp",
    default: "now()"
  })
  created_at: string;

  @Column({
    type: "timestamp",
    default: "now()"
  })
  updated_at: string;

  @Column({
    type: "timestamp",
    nullable: true
  })
  deleted_at: string;
}