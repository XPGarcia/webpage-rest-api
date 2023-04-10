import { FactorizedAttrs, Factory } from '@jorgebodega/typeorm-seeding';
import { faker } from '@faker-js/faker';
import { EducationEntity } from '../../user/infra/typeorm/entities';

export class EducationFactory extends Factory<EducationEntity> {
  protected entity = EducationEntity;
  protected attrs(): FactorizedAttrs<EducationEntity> {
    return {
      id: faker.datatype.uuid,
    };
  }
}
