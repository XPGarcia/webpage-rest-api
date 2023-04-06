import { Inject, Injectable } from '@nestjs/common';
import { UserSkillRepository } from '../contracts/repositories/';
import { UserSkill } from '../entities/';

@Injectable()
export class UserSkillService {
  constructor(
    @Inject(UserSkillRepository)
    private readonly userSkillRepository: UserSkillRepository,
  ) {}

  async find({ userId }: { userId: string }): Promise<UserSkill[]> {
    return await this.userSkillRepository.find({ userId });
  }
}
