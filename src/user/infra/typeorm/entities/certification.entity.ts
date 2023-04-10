import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'certification' })
export class CertificationEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => UserEntity, (user) => user.certificationList)
  user: UserEntity;

  @Column({ name: 'date', nullable: false })
  date!: Date;

  @Column({ name: 'title', nullable: false })
  title!: string;

  @Column({ name: 'institution', nullable: false })
  institution!: string;

  @Column({ name: 'description', nullable: false })
  description!: string;
}
