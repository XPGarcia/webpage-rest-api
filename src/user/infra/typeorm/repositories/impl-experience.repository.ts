import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ExperienceMapper } from '../mappers';
import { Experience } from '../../../domain/entities';
import { ExperienceRepository } from '../../../domain/contracts/repositories';
import { ExperienceEntity } from '../entities';

@Injectable()
export class ImplExperienceRepository implements ExperienceRepository {
  constructor(
    @InjectRepository(ExperienceEntity)
    private readonly repository: Repository<ExperienceEntity>,
  ) {}

  async find({ userId }: { userId: string }): Promise<Experience[]> {
    const entities = await this.repository.find({
      where: { user: { id: userId } },
    });

    return ExperienceMapper.toDomains({ entities });
  }
}
