import { Controller, Get, Inject, Param } from '@nestjs/common';
import { UserSkillService } from '../../domain/services';
import { UserSkillDtoMapper } from '../mappers';

@Controller('userSkill')
export class UserSkillController {
  constructor(
    @Inject(UserSkillService)
    private readonly userSkillService: UserSkillService,
  ) {}

  @Get('/:id')
  async get(@Param('id') userId: string) {
    const userSkills = await this.userSkillService.find({
      userId,
    });
    const response = UserSkillDtoMapper.toResponses({ userSkills });
    return { data: response };
  }
}
