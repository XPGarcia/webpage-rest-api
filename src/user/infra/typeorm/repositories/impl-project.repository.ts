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

  async findOne({ projectId }: { projectId: string }): Promise<Project> {
    const projectEntity = await this.repository.findOne({
      where: { id: projectId },
      relations: { skills: { skill: true } },
    });
    if (!projectEntity) return;

    return ProjectMapper.toDomain({ entity: projectEntity });
  }

  async findOneByUserIdAndCode({
    userId,
    code,
  }: {
    userId: string;
    code: string;
  }): Promise<Project> {
    console.log(userId);
    console.log(code);
    const projectEntity = await this.repository.findOne({
      where: { user: { id: userId }, code },
      relations: { skills: { skill: true } },
    });
    if (!projectEntity) return;

    return ProjectMapper.toDomain({ entity: projectEntity });
  }
}
