import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'social_media' })
export class SocialMediaEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'github', nullable: true })
  github!: string;

  @Column({ name: 'linkedin', nullable: true })
  linkedin!: string;

  @Column({ name: 'twitter', nullable: true })
  twitter!: string;

  @Column({ name: 'facebook', nullable: true })
  facebook!: string;

  @Column({ name: 'instagram', nullable: true })
  instagram!: string;
}
