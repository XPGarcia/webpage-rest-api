import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'experience' })
export class ExperienceEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => UserEntity, (user) => user.experienceList)
  user: UserEntity;

  @Column({ name: 'dateFrom', nullable: false })
  dateFrom!: Date;

  @Column({ name: 'dateTo', nullable: true })
  dateTo!: Date;

  @Column({ name: 'role', nullable: false })
  role!: string;

  @Column({ name: 'company', nullable: false })
  company!: string;

  @Column({ name: 'description', nullable: false })
  description!: string;
}
