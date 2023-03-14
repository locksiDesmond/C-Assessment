import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EmployeeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  dateJoined: Date;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  fullName: string;

  @Column()
  position: string;
}
