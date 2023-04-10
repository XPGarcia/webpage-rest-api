import { Certification } from 'src/user/domain/entities';
import { CertificationResponse } from '../dtos';

export class CertificationDtoMapper {
  public static toResponse({
    certification,
  }: {
    certification: Certification;
  }): CertificationResponse {
    return {
      id: certification.id,
      date: certification.date,
      title: certification.title,
      institution: certification.institution,
      description: certification.description,
    };
  }

  public static toResponses({
    certificationList,
  }: {
    certificationList: Certification[];
  }): CertificationResponse[] {
    return certificationList.map((certification) =>
      this.toResponse({ certification }),
    );
  }
}
