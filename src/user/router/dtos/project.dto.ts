import { UserSkillResponse } from './user-skill.dto';

export interface ProjectResponse {
  id: string;
  code: string;
  title: string;
  imageUrl: string;
  clientName?: string;
  previewUrl?: string;
  description: string;
  bulletPoints: string[];
  skills: UserSkillResponse[];
}
