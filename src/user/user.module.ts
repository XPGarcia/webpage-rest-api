import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController, UserSkillController } from './router/controllers';
import {
  ExperienceService,
  UserService,
  UserSkillService,
} from './domain/services';
import { ExampleMiddleware } from '../shared/infra/middlewares/example.middleware';
import { SharedModule } from '../shared/shared.module';
import {
  ExperienceRepository,
  UserRepository,
  UserSkillRepository,
} from './domain/contracts/repositories';
import {
  ExperienceEntity,
  UserEntity,
  UserSkillEntity,
} from './infra/typeorm/entities';
import {
  ImplExperienceRepository,
  ImplUserRepository,
} from './infra/typeorm/repositories';
import { ImplUserSkillRepository } from './infra/typeorm/repositories/impl-user-skill.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, UserSkillEntity, ExperienceEntity]),
    SharedModule,
  ],
  providers: [
    {
      provide: UserRepository,
      useClass: ImplUserRepository,
    },
    {
      provide: UserSkillRepository,
      useClass: ImplUserSkillRepository,
    },
    {
      provide: ExperienceRepository,
      useClass: ImplExperienceRepository,
    },
    UserService,
    UserSkillService,
    ExperienceService,
  ],
  controllers: [UserController, UserSkillController],
  exports: [TypeOrmModule],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExampleMiddleware).forRoutes(UserController);
  }
}
