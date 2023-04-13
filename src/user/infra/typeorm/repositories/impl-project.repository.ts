import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ProjectMapper } from '../mappers';
import { Project } from '../../../domain/entities';
import { ProjectRepository } from '../../../domain/contracts/repositories';
import { ProjectEntity } from '../entities';

@Injectable()
export class ImplProjectRepository implements ProjectRepository {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly repository: Repository<ProjectEntity>,
  ) {}

  async find({ userId }: { userId: string }): Promise<Project[]> {
    const entities = await this.repository.find({
      where: { user: { id: userId } },
      relations: { skills: { skill: true } },
    });

    return ProjectMapper.toDomains({ entities });
  }
}
