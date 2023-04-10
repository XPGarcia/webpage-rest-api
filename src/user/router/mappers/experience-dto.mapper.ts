import { Experience } from 'src/user/domain/entities';
import { ExperienceResponse } from '../dtos';

export class ExperienceDtoMapper {
  public static toResponse({
    experience,
  }: {
    experience: Experience;
  }): ExperienceResponse {
    return {
      id: experience.id,
      dateFrom: experience.dateFrom,
      dateTo: experience.dateTo,
      role: experience.role,
      company: experience.company,
      description: experience.description,
    };
  }

  public static toResponses({
    experienceList,
  }: {
    experienceList: Experience[];
  }): ExperienceResponse[] {
    return experienceList.map((experience) => this.toResponse({ experience }));
  }
}
