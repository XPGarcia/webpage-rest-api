import { FactorizedAttrs, Factory } from '@jorgebodega/typeorm-seeding';
import { faker } from '@faker-js/faker';
import { SkillEntity } from '../../user/infra/typeorm/entities';

export class SkillFactory extends Factory<SkillEntity> {
  protected entity = SkillEntity;
  protected attrs(): FactorizedAttrs<SkillEntity> {
    return {
      id: faker.datatype.uuid,
      name: faker.random.locale,
    };
  }
}
