import { FactorizedAttrs, Factory } from '@jorgebodega/typeorm-seeding';
import { faker } from '@faker-js/faker';
import { SocialMediaEntity } from '../../user/infra/typeorm/entities';

export class SocialMediaFactory extends Factory<SocialMediaEntity> {
  protected entity = SocialMediaEntity;
  protected attrs(): FactorizedAttrs<SocialMediaEntity> {
    return {
      id: faker.datatype.uuid,
    };
  }
}
