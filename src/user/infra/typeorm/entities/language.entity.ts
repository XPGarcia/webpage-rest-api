import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserLanguageEntity } from './user-language.entity';

@Entity({ name: 'language' })
export class LanguageEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'name', nullable: false })
  name!: string;

  @OneToMany(() => UserLanguageEntity, (entry) => entry.language, {
    cascade: true,
  })
  userLanguage!: UserLanguageEntity[];
}
