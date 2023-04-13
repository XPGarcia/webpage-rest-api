import { Project } from 'src/user/domain/entities';
import { ProjectEntity } from '../entities';
import { UserSkillMapper } from './user-skill.mapper';

export class ProjectMapper {
  public static toDomain({ entity }: { entity: ProjectEntity }): Project {
    return new Project({
      id: entity.id,
      code: entity.code,
      title: entity.title,
      clientName: entity.clientName,
      previewUrl: entity.previewUrl,
      imageUrl: entity.imageUrl,
      description: entity.description,
      bulletPoints: entity.bulletPoints,
      skills: UserSkillMapper.toDomains({ entities: entity.skills }),
    });
  }

  public static toDomains({
    entities,
  }: {
    entities: ProjectEntity[];
  }): Project[] {
    if (!entities) return [];

    return entities.map((entity) => this.toDomain({ entity }));
  }
}
