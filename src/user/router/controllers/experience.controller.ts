import { Controller, Get, Inject } from '@nestjs/common';
import { ExperienceService } from '../../domain/services';
import { ExperienceDtoMapper } from '../mappers';
import { JWT } from 'src/shared/router/decorators/jwt.decorator';

@Controller('experience')
export class ExperienceController {
  constructor(
    @Inject(ExperienceService)
    private readonly experienceService: ExperienceService,
  ) {}

  @Get('/')
  async find(@JWT('sub') userId: string) {
    const experienceList = await this.experienceService.find({
      userId,
    });
    const response = ExperienceDtoMapper.toResponses({ experienceList });
    return { data: response };
  }
}
