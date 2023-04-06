import { UserSkillRepository } from '../../../domain/contracts/repositories';
import { UserSkillEntity } from '../entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UserSkillMapper } from '../mappers';
import { UserSkill } from '../../../domain/entities';

@Injectable()
export class ImplUserSkillRepository implements UserSkillRepository {
  constructor(
    @InjectRepository(UserSkillEntity)
    private readonly repository: Repository<UserSkillEntity>,
  ) {}

  async find({ userId }: { userId: string }): Promise<UserSkill[]> {
    const entities = await this.repository.find({
      where: { user: { id: userId } },
      relations: {
        skill: true,
      },
    });

    return UserSkillMapper.toDomains({ entities });
  }
}
