import { FactorizedAttrs, Factory } from '@jorgebodega/typeorm-seeding';
import { faker } from '@faker-js/faker';
import { UserLanguageEntity } from '../../user/infra/typeorm/entities';

export class UserLanguageFactory extends Factory<UserLanguageEntity> {
  protected entity = UserLanguageEntity;
  protected attrs(): FactorizedAttrs<UserLanguageEntity> {
    return {
      id: faker.datatype.uuid,
      level: faker.datatype.number({ min: 1, max: 10 }),
    };
  }
}
