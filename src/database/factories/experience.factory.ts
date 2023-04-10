import { FactorizedAttrs, Factory } from '@jorgebodega/typeorm-seeding';
import { faker } from '@faker-js/faker';
import { ExperienceEntity } from '../../user/infra/typeorm/entities';

export class ExperienceFactory extends Factory<ExperienceEntity> {
  protected entity = ExperienceEntity;
  protected attrs(): FactorizedAttrs<ExperienceEntity> {
    return {
      id: faker.datatype.uuid,
    };
  }
}
