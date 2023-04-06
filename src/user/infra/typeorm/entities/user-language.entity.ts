import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { LanguageEntity } from './language.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'user_language' })
export class UserLanguageEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => UserEntity, (user) => user.languages)
  user: UserEntity;

  @ManyToOne(() => LanguageEntity, (language) => language.userLanguage)
  language!: LanguageEntity;

  @Column({ name: 'level', nullable: false })
  level!: number;
}
