import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController, UserSkillController } from './router/controllers';
import { UserService, UserSkillService } from './domain/services';
import { ExampleMiddleware } from '../shared/infra/middlewares/example.middleware';
import { SharedModule } from '../shared/shared.module';
import {
  UserRepository,
  UserSkillRepository,
} from './domain/contracts/repositories';
import { UserEntity, UserSkillEntity } from './infra/typeorm/entities';
import { ImplUserRepository } from './infra/typeorm/repositories';
import { ImplUserSkillRepository } from './infra/typeorm/repositories/impl-user-skill.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, UserSkillEntity]),
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
    UserService,
    UserSkillService,
  ],
  controllers: [UserController, UserSkillController],
  exports: [TypeOrmModule],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExampleMiddleware).forRoutes(UserController);
  }
}
