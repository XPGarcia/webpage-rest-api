import { Project } from '../../entities';

export interface ProjectRepository {
  find({ userId }: { userId: string }): Promise<Project[]>;
}

export const ProjectRepository = Symbol('ProjectRepository');
