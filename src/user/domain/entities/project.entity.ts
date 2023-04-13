import { UserSkill } from './user-skill.entity';

export class Project {
  id?: string;
  code: string;
  title: string;
  imageUrl: string;
  clientName?: string;
  previewUrl?: string;
  description: string;
  bulletPoints: string[];
  skills: UserSkill[];

  constructor({
    id,
    code,
    title,
    imageUrl,
    clientName,
    previewUrl,
    description,
    bulletPoints,
    skills,
  }: {
    id?: string;
    code: string;
    title: string;
    imageUrl: string;
    clientName?: string;
    previewUrl?: string;
    description: string;
    bulletPoints: string[];
    skills: UserSkill[];
  }) {
    this.id = id;
    this.code = code;
    this.title = title;
    this.imageUrl = imageUrl;
    this.clientName = clientName;
    this.previewUrl = previewUrl;
    this.description = description;
    this.bulletPoints = bulletPoints;
    this.skills = skills;
  }
}
