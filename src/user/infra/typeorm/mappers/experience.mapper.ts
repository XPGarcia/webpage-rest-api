import { Experience } from 'src/user/domain/entities';
import { ExperienceEntity } from '../entities';

export class ExperienceMapper {
  public static toDomain({ entity }: { entity: ExperienceEntity }): Experience {
    return new Experience({
      id: entity.id,
      dateFrom: entity.dateFrom,
      dateTo: entity.dateTo,
      company: entity.company,
      role: entity.role,
      description: entity.description,
    });
  }

  public static toDomains({
    entities,
  }: {
    entities: ExperienceEntity[];
  }): Experience[] {
    if (!entities) return [];

    return entities.map((entity) => this.toDomain({ entity }));
  }
}
