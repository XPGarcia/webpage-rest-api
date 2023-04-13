import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { UserSkillEntity } from './user-skill.entity';

@Entity({ name: 'project' })
export class ProjectEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => UserEntity, (user) => user.projects)
  user: UserEntity;

  @Column({ name: 'code', nullable: false })
  code!: string;

  @Column({ name: 'title', nullable: false })
  title!: string;

  @Column({ name: 'imageUrl', nullable: false })
  imageUrl!: string;

  @Column({ name: 'clientName', nullable: true })
  clientName!: string;

  @Column({ name: 'previewUrl', nullable: true })
  previewUrl!: string;

  @Column({ name: 'description', nullable: false })
  description!: string;

  @Column('text', { array: true })
  bulletPoints!: string[];

  @ManyToMany(() => UserSkillEntity)
  @JoinTable({ name: 'project_user_skill' })
  skills!: UserSkillEntity[];
}
