import { UserSkill } from '../../entities';

export interface UserSkillRepository {
  find({ userId }: { userId: string }): Promise<UserSkill[]>;
}

export const UserSkillRepository = Symbol('UserSkillRepository');
