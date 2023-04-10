import { FactorizedAttrs, Factory } from '@jorgebodega/typeorm-seeding';
import { faker } from '@faker-js/faker';
import { CertificationEntity } from '../../user/infra/typeorm/entities';

export class CertificationFactory extends Factory<CertificationEntity> {
  protected entity = CertificationEntity;
  protected attrs(): FactorizedAttrs<CertificationEntity> {
    return {
      id: faker.datatype.uuid,
    };
  }
}
