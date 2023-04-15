import { Project } from '../../entities';

export interface ProjectRepository {
  find({ userId }: { userId: string }): Promise<Project[]>;
  findOne({ projectId }: { projectId: string }): Promise<Project>;
  findOneByUserIdAndCode({
    userId,
    code,
  }: {
    userId: string;
    code: string;
  }): Promise<Project>;
}

export const ProjectRepository = Symbol('ProjectRepository');
