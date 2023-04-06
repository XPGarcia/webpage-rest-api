import { UserLanguage, Language } from 'src/user/domain/entities';
import { UserLanguageEntity } from '../entities/user-language.entity';

export class UserLanguageMapper {
  public static toDomain({ entity }: { entity: UserLanguageEntity }): Language {
    return new UserLanguage({
      ...entity,
      name: entity.language.name,
    });
  }

  public static toDomains({
    entities,
  }: {
    entities: UserLanguageEntity[];
  }): Language[] {
    if (!entities) return [];

    return entities.map((entity) => this.toDomain({ entity }));
  }
}
