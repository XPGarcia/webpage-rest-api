import { Education } from 'src/user/domain/entities';
import { EducationResponse } from '../dtos';

export class EducationDtoMapper {
  public static toResponse({
    education,
  }: {
    education: Education;
  }): EducationResponse {
    return {
      id: education.id,
      dateFrom: education.dateFrom,
      dateTo: education.dateTo,
      title: education.title,
      institution: education.institution,
      description: education.description,
    };
  }

  public static toResponses({
    educationList,
  }: {
    educationList: Education[];
  }): EducationResponse[] {
    return educationList.map((education) => this.toResponse({ education }));
  }
}
