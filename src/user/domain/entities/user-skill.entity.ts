import { Skill } from './skill.entity';

export class UserSkill extends Skill {
  percentage: number;

  constructor({
    id,
    name,
    percentage,
  }: {
    id?: string;
    name: string;
    percentage: number;
  }) {
    super({ id, name });
    this.percentage = percentage;
  }
}
