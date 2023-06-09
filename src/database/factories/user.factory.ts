import { FactorizedAttrs, Factory } from '@jorgebodega/typeorm-seeding';
import { faker } from '@faker-js/faker';
import { UserEntity } from '../../user/infra/typeorm/entities';

export class UserFactory extends Factory<UserEntity> {
  protected entity = UserEntity;
  protected attrs(): FactorizedAttrs<UserEntity> {
    return {
      id: faker.datatype.uuid,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
    };
  }
}
