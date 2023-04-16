import { Controller, Get, Inject } from '@nestjs/common';
import { EducationService } from '../../domain/services';
import { EducationDtoMapper } from '../mappers';
import { JWT } from 'src/shared/router/decorators/jwt.decorator';

@Controller('education')
export class EducationController {
  constructor(
    @Inject(EducationService)
    private readonly educationService: EducationService,
  ) {}

  @Get('/')
  async find(@JWT('sub') userId: string) {
    const educationList = await this.educationService.find({
      userId,
    });
    const response = EducationDtoMapper.toResponses({ educationList });
    return { data: response };
  }
}
