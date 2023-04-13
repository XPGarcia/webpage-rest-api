import { Inject, Injectable } from '@nestjs/common';
import { ProjectRepository } from '../contracts/repositories/';
import { Project } from '../entities/';

@Injectable()
export class ProjectService {
  constructor(
    @Inject(ProjectRepository)
    private readonly projectRepository: ProjectRepository,
  ) {}

  async find({ userId }: { userId: string }): Promise<Project[]> {
    return await this.projectRepository.find({ userId });
  }
}
