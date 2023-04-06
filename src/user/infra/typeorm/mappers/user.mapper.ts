import { UserEntity } from '../entities/user.entity';
import { User } from '../../../domain/entities/user.entitiy';
import { UserLanguageMapper } from './user-language.mapper';

export class UserMapper {
  public static toDomain({ entity }: { entity: UserEntity }): User {
    return new User({
      ...entity,
      languages: UserLanguageMapper.toDomains({ entities: entity.languages }),
    });
  }

  public static toDomains({ entities }: { entities: UserEntity[] }): User[] {
    if (!entities) return [];

    return entities.map((entity) => this.toDomain({ entity }));
  }

  public static toEntity({ user }: { user: User }): UserEntity {
    const userEntity = new UserEntity();
    userEntity.id = user.id;
    userEntity.firstName = user.firstName;
    userEntity.lastName = user.lastName;
    userEntity.role = user.role;
    userEntity.email = user.email;
    userEntity.phone = user.phone;
    userEntity.address = user.address;
    userEntity.description = user.description;
    userEntity.available = user.available;
    userEntity.nationality = user.nationality;
    return userEntity;
  }
}
