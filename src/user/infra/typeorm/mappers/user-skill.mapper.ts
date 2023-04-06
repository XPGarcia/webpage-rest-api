import { UserSkill } from 'src/user/domain/entities';
import { UserSkillEntity } from '../entities';

export class UserSkillMapper {
  public static toDomain({ entity }: { entity: UserSkillEntity }): UserSkill {
    return new UserSkill({ ...entity, name: entity.skill.name });
  }

  public static toDomains({
    entities,
  }: {
    entities: UserSkillEntity[];
  }): UserSkill[] {
    if (!entities) return [];

    return entities.map((entity) => this.toDomain({ entity }));
  }
}
