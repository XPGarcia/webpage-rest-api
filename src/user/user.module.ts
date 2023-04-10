import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController, UserSkillController } from './router/controllers';
import {
  EducationService,
  ExperienceService,
  UserService,
  UserSkillService,
} from './domain/services';
import { ExampleMiddleware } from '../shared/infra/middlewares/example.middleware';
import { SharedModule } from '../shared/shared.module';
import {
  EducationRepository,
  ExperienceRepository,
  UserRepository,
  UserSkillRepository,
} from './domain/contracts/repositories';
import {
  EducationEntity,
  ExperienceEntity,
  UserEntity,
  UserSkillEntity,
} from './infra/typeorm/entities';
import {
  ImplExperienceRepository,
  ImplUserRepository,
  ImplEducationRepository,
  ImplUserSkillRepository,
} from './infra/typeorm/repositories';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      UserSkillEntity,
      ExperienceEntity,
      EducationEntity,
    ]),
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
    {
      provide: EducationRepository,
      useClass: ImplEducationRepository,
    },
    UserService,
    UserSkillService,
    ExperienceService,
    EducationService,
  ],
  controllers: [UserController, UserSkillController],
  exports: [TypeOrmModule],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExampleMiddleware).forRoutes(UserController);
  }
}
