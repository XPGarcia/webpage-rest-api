import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  UserController,
  UserSkillController,
  ProjectController,
  EducationController,
  ExperienceController,
  CertificationController,
  SocialMediaController,
} from './router/controllers';
import {
  CertificationService,
  EducationService,
  ExperienceService,
  ProjectService,
  SocialMediaService,
  UserService,
  UserSkillService,
} from './domain/services';
import { SharedModule } from '../shared/shared.module';
import {
  CertificationRepository,
  EducationRepository,
  ExperienceRepository,
  ProjectRepository,
  SocialMediaRepository,
  UserRepository,
  UserSkillRepository,
} from './domain/contracts/repositories';
import {
  CertificationEntity,
  EducationEntity,
  ExperienceEntity,
  ProjectEntity,
  SocialMediaEntity,
  UserEntity,
  UserSkillEntity,
} from './infra/typeorm/entities';
import {
  ImplExperienceRepository,
  ImplUserRepository,
  ImplEducationRepository,
  ImplUserSkillRepository,
  ImplCertificationRepository,
  ImplSocialMediaRepository,
  ImplProjectRepository,
} from './infra/typeorm/repositories';
import { JWTMiddleware } from 'src/shared/infra/middlewares/jwt-handler.middleware';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      UserSkillEntity,
      ExperienceEntity,
      EducationEntity,
      CertificationEntity,
      SocialMediaEntity,
      ProjectEntity,
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
    {
      provide: CertificationRepository,
      useClass: ImplCertificationRepository,
    },
    {
      provide: SocialMediaRepository,
      useClass: ImplSocialMediaRepository,
    },
    {
      provide: ProjectRepository,
      useClass: ImplProjectRepository,
    },
    UserService,
    UserSkillService,
    ExperienceService,
    EducationService,
    CertificationService,
    SocialMediaService,
    ProjectService,
  ],
  controllers: [
    UserController,
    UserSkillController,
    ProjectController,
    EducationController,
    ExperienceController,
    CertificationController,
    SocialMediaController,
  ],
  exports: [TypeOrmModule],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JWTMiddleware)
      .forRoutes(UserController, UserSkillController, ProjectController);
  }
}
