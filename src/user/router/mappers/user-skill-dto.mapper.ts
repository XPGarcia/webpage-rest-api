import { UserSkill } from 'src/user/domain/entities';
import { UserSkillResponse } from '../dtos';

export class UserSkillDtoMapper {
  public static toResponse({
    userSkill,
  }: {
    userSkill: UserSkill;
  }): UserSkillResponse {
    return { ...userSkill, id: userSkill.id };
  }

  public static toResponses({
    userSkills,
  }: {
    userSkills: UserSkill[];
  }): UserSkillResponse[] {
    return userSkills.map((userSkill) => this.toResponse({ userSkill }));
  }
}
