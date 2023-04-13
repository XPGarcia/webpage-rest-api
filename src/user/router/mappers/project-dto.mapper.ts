import { Project } from 'src/user/domain/entities';
import { ProjectResponse } from '../dtos';
import { UserSkillDtoMapper } from './user-skill-dto.mapper';

export class ProjectDtoMapper {
  public static toResponse({ project }: { project: Project }): ProjectResponse {
    return {
      id: project.id,
      code: project.code,
      title: project.title,
      imageUrl: project.imageUrl,
      clientName: project.clientName,
      previewUrl: project.previewUrl,
      description: project.description,
      bulletPoints: project.bulletPoints,
      skills: UserSkillDtoMapper.toResponses({ userSkills: project.skills }),
    };
  }

  public static toResponses({
    projects,
  }: {
    projects: Project[];
  }): ProjectResponse[] {
    return projects.map((project) => this.toResponse({ project }));
  }
}
