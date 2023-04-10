import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { EducationMapper } from '../mappers';
import { Education } from '../../../domain/entities';
import { EducationRepository } from '../../../domain/contracts/repositories';
import { EducationEntity } from '../entities';

@Injectable()
export class ImplEducationRepository implements EducationRepository {
  constructor(
    @InjectRepository(EducationEntity)
    private readonly repository: Repository<EducationEntity>,
  ) {}

  async find({ userId }: { userId: string }): Promise<Education[]> {
    const entities = await this.repository.find({
      where: { user: { id: userId } },
    });

    return EducationMapper.toDomains({ entities });
  }
}
