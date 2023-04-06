import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserLanguageEntity } from './user-language.entity';

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

  @OneToMany(() => UserLanguageEntity, (entry) => entry.user, {
    cascade: true,
  })
  languages!: UserLanguageEntity[];
}
