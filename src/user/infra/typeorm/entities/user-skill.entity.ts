import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';
import { SkillEntity } from './skill.entity';

@Entity({ name: 'user_skill' })
export class UserSkillEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => UserEntity, (user) => user.skills)
  user: UserEntity;

  @ManyToOne(() => SkillEntity, (skill) => skill.userSkill)
  skill!: SkillEntity;

  @Column({ name: 'percentage', nullable: false })
  percentage!: number;
}
