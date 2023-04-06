import { FactorizedAttrs, Factory } from '@jorgebodega/typeorm-seeding';
import { faker } from '@faker-js/faker';
import { UserSkillEntity } from '../../user/infra/typeorm/entities';

export class UserSkillFactory extends Factory<UserSkillEntity> {
  protected entity = UserSkillEntity;
  protected attrs(): FactorizedAttrs<UserSkillEntity> {
    return {
      id: faker.datatype.uuid,
      percentage: faker.datatype.number({ min: 1, max: 10 }),
    };
  }
}
