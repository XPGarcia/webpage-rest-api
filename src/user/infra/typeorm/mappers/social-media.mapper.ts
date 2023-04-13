import { SocialMedia } from 'src/user/domain/entities';
import { SocialMediaEntity } from '../entities';

export class SocialMediaMapper {
  public static toDomain({
    entity,
  }: {
    entity?: SocialMediaEntity;
  }): SocialMedia {
    if (!entity) return {};

    return new SocialMedia({
      id: entity.id,
      github: entity.github,
      linkedin: entity.linkedin,
      twitter: entity.twitter,
      facebook: entity.facebook,
      instagram: entity.instagram,
    });
  }

  public static toDomains({
    entities,
  }: {
    entities: SocialMediaEntity[];
  }): SocialMedia[] {
    if (!entities) return [];

    return entities.map((entity) => this.toDomain({ entity }));
  }
}
