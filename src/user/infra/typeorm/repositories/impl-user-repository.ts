import {
  FindOneUserFilters,
  UserRepository,
} from '../../../domain/contracts/repositories/user.repository';
import { UserEntity } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UserMapper } from '../mappers/user.mapper';
import { User } from '../../../domain/entities/user.entitiy';

@Injectable()
export class ImplUserRepository implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async create({ user }: { user: User }): Promise<User> {
    const userEntity = UserMapper.toEntity({ user });
    const createdUser = await this.repository.save(userEntity);
    return UserMapper.toDomain({ entity: createdUser });
  }

  async findOne({
    userId,
    filters,
  }: {
    userId: string;
    filters?: FindOneUserFilters;
  }): Promise<User> {
    const withLanguages = filters.withLanguages
      ? {
          languages: {
            language: true,
          },
        }
      : undefined;

    const userEntity = await this.repository.findOne({
      where: { id: userId },
      relations: { ...withLanguages },
    });
    if (!userEntity) return;

    return UserMapper.toDomain({ entity: userEntity });
  }
}
