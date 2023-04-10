import { Experience } from '../../entities';

export interface ExperienceRepository {
  find({ userId }: { userId: string }): Promise<Experience[]>;
}

export const ExperienceRepository = Symbol('ExperienceRepository');
