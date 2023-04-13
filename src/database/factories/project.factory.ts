import { FactorizedAttrs, Factory } from '@jorgebodega/typeorm-seeding';
import { faker } from '@faker-js/faker';
import { ProjectEntity } from '../../user/infra/typeorm/entities';

export class ProjectFactory extends Factory<ProjectEntity> {
  protected entity = ProjectEntity;
  protected attrs(): FactorizedAttrs<ProjectEntity> {
    return {
      id: faker.datatype.uuid,
    };
  }
}
