import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Outages {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  location: string;

  @Column()
  description: string;

  @Column({ default: false })
  resolved: boolean;

  @CreateDateColumn()
  reportedAt: Date;
}
