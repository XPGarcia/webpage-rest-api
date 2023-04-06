import { FactorizedAttrs, Factory } from '@jorgebodega/typeorm-seeding';
import { faker } from '@faker-js/faker';
import { LanguageEntity } from '../../user/infra/typeorm/entities';

export class LanguageFactory extends Factory<LanguageEntity> {
  protected entity = LanguageEntity;
  protected attrs(): FactorizedAttrs<LanguageEntity> {
    return {
      id: faker.datatype.uuid,
      name: faker.random.locale,
    };
  }
}
