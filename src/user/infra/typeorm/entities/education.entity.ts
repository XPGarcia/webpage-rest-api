import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'education' })
export class EducationEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => UserEntity, (user) => user.educationList)
  user: UserEntity;

  @Column({ name: 'dateFrom', nullable: false })
  dateFrom!: Date;

  @Column({ name: 'dateTo', nullable: true })
  dateTo!: Date;

  @Column({ name: 'title', nullable: false })
  title!: string;

  @Column({ name: 'institution', nullable: false })
  institution!: string;

  @Column({ name: 'description', nullable: false })
  description!: string;
}
