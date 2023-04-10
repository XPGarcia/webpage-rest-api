import { Education } from '../../entities';

export interface EducationRepository {
  find({ userId }: { userId: string }): Promise<Education[]>;
}

export const EducationRepository = Symbol('EducationRepository');
