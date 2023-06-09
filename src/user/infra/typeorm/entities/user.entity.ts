import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { UserLanguageEntity } from './user-language.entity';
import { UserSkillEntity } from './user-skill.entity';
import { ExperienceEntity } from './experience.entity';
import { EducationEntity } from './education.entity';
import { CertificationEntity } from './certification.entity';
import { SocialMediaEntity } from './social-media.entity';
import { ProjectEntity } from './project.entity';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'first_name', nullable: false })
  firstName!: string;

  @Column({ name: 'last_name', nullable: false })
  lastName!: string;

  @Column({ name: 'birthDate', nullable: false })
  birthDate!: Date;

  @Column({ name: 'role', nullable: false })
  role!: string;

  @Column({ name: 'email', nullable: false })
  email!: string;

  @Column({ name: 'phone', nullable: true })
  phone?: string;

  @Column({ name: 'address', nullable: true })
  address?: string;

  @Column({ name: 'description', nullable: false })
  description!: string;

  @Column({ name: 'available', nullable: false })
  available!: boolean;

  @Column({ name: 'nationality', nullable: false })
  nationality!: string;

  @OneToOne(() => SocialMediaEntity)
  @JoinColumn()
  socialMedia!: SocialMediaEntity;

  @OneToMany(() => UserLanguageEntity, (language) => language.user, {
    cascade: true,
  })
  languages!: UserLanguageEntity[];

  @OneToMany(() => UserSkillEntity, (skill) => skill.user, {
    cascade: true,
  })
  skills!: UserSkillEntity[];

  @OneToMany(() => ExperienceEntity, (experience) => experience.user, {
    cascade: true,
  })
  experienceList!: ExperienceEntity[];

  @OneToMany(() => EducationEntity, (education) => education.user, {
    cascade: true,
  })
  educationList!: EducationEntity[];

  @OneToMany(() => CertificationEntity, (certification) => certification.user, {
    cascade: true,
  })
  certificationList!: CertificationEntity[];

  @OneToMany(() => ProjectEntity, (project) => project.user, {
    cascade: true,
  })
  projects!: ProjectEntity[];
}
