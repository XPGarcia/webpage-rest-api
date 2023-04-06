import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserSkillEntity } from './user-skill.entity';

@Entity({ name: 'skill' })
export class SkillEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'name', nullable: false })
  name!: string;

  @OneToMany(() => UserSkillEntity, (entry) => entry.skill, {
    cascade: true,
  })
  userSkill!: UserSkillEntity[];
}
