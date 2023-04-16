import { Controller, Get, Inject } from '@nestjs/common';
import { UserSkillService } from '../../domain/services';
import { UserSkillDtoMapper } from '../mappers';
import { JWT } from 'src/shared/router/decorators/jwt.decorator';

@Controller('userSkill')
export class UserSkillController {
  constructor(
    @Inject(UserSkillService)
    private readonly userSkillService: UserSkillService,
  ) {}

  @Get('/')
  async get(@JWT('sub') userId: string) {
    const userSkills = await this.userSkillService.find({
      userId,
    });
    const response = UserSkillDtoMapper.toResponses({ userSkills });
    return { data: response };
  }
}
