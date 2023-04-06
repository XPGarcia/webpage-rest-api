import { User } from '../../entities/user.entitiy';

export interface UserRepository {
  create({ user }: { user: User }): Promise<User>;
  findOne({
    userId,
    filters,
  }: {
    userId: string;
    filters?: FindOneUserFilters;
  }): Promise<User>;
}

export interface FindOneUserFilters {
  withLanguages?: boolean;
}

export const UserRepository = Symbol('UserRepository');
