import { Inject, Injectable } from '@nestjs/common';
import { ProjectRepository } from '../contracts/repositories/';
import { Project } from '../entities/';
import { NotFoundError } from '@prometeo-dev/error-handler-library/dist/errors';

@Injectable()
export class ProjectService {
  constructor(
    @Inject(ProjectRepository)
    private readonly projectRepository: ProjectRepository,
  ) {}

  async find({ userId }: { userId: string }): Promise<Project[]> {
    return await this.projectRepository.find({ userId });
  }

  async findOne({ projectId }: { projectId: string }): Promise<Project> {
    const project = await this.projectRepository.findOne({ projectId });
    if (!project) throw new NotFoundError({ message: 'Project not found' });

    return project;
  }

  async findOneByUserIdAndCode({
    userId,
    code,
  }: {
    userId: string;
    code: string;
  }): Promise<Project> {
    const project = await this.projectRepository.findOneByUserIdAndCode({
      userId,
      code,
    });
    if (!project) throw new NotFoundError({ message: 'Project not found' });

    return project;
  }
}
