import { Certification } from 'src/user/domain/entities';
import { CertificationEntity } from '../entities';

export class CertificationMapper {
  public static toDomain({
    entity,
  }: {
    entity: CertificationEntity;
  }): Certification {
    return new Certification({
      id: entity.id,
      date: entity.date,
      title: entity.title,
      institution: entity.institution,
      description: entity.description,
    });
  }

  public static toDomains({
    entities,
  }: {
    entities: CertificationEntity[];
  }): Certification[] {
    if (!entities) return [];

    return entities.map((entity) => this.toDomain({ entity }));
  }
}
