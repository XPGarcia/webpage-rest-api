import { Education } from 'src/user/domain/entities';
import { EducationEntity } from '../entities';

export class EducationMapper {
  public static toDomain({ entity }: { entity: EducationEntity }): Education {
    return new Education({
      id: entity.id,
      dateFrom: entity.dateFrom,
      dateTo: entity.dateTo,
      title: entity.title,
      institution: entity.institution,
      description: entity.description,
    });
  }

  public static toDomains({
    entities,
  }: {
    entities: EducationEntity[];
  }): Education[] {
    if (!entities) return [];

    return entities.map((entity) => this.toDomain({ entity }));
  }
}
