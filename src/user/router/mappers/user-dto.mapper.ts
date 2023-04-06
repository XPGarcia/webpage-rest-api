import { User } from 'src/user/domain/entities';
import { CreateUserDto } from '../dtos';

export class UserDtoMapper {
  public static createDtoToDomain({ dto }: { dto: CreateUserDto }): User {
    const user = new User(dto);
    return user;
  }

  public static toResponse({ user }: { user: User }) {
    return { ...user };
  }
}
