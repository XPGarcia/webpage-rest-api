import { Inject, Injectable } from '@nestjs/common';
import { NotFoundError } from '@prometeo-dev/error-handler-library/dist/errors';
import { FindOneUserFilters, UserRepository } from '../contracts/repositories/';
import { User } from '../entities/';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async create({ user }: { user: User }): Promise<User> {
    return await this.userRepository.create({ user });
  }

  async findOne({
    userId,
    filters,
  }: {
    userId: string;
    filters: FindOneUserFilters;
  }): Promise<User> {
    const user = await this.userRepository.findOne({ userId, filters });
    if (!user) throw new NotFoundError({ message: 'Product not found' });

    return user;
  }
}
