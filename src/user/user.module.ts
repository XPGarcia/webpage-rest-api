import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController, UserSkillController } from './router/controllers';
import {
  CertificationService,
  EducationService,
  ExperienceService,
  SocialMediaService,
  UserService,
  UserSkillService,
} from './domain/services';
import { SharedModule } from '../shared/shared.module';
import {
  CertificationRepository,
  EducationRepository,
  ExperienceRepository,
  SocialMediaRepository,
  UserRepository,
  UserSkillRepository,
} from './domain/contracts/repositories';
import {
  CertificationEntity,
  EducationEntity,
  ExperienceEntity,
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
    UserService,
    UserSkillService,
    ExperienceService,
    EducationService,
    CertificationService,
    SocialMediaService,
  ],
  controllers: [UserController, UserSkillController],
  exports: [TypeOrmModule],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JWTMiddleware)
      .forRoutes(UserController, UserSkillController);
  }
}
