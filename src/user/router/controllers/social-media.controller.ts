import { Controller, Get, Inject, Param } from '@nestjs/common';
import { SocialMediaService } from '../../domain/services';
import { SocialMediaDtoMapper } from '../mappers';

@Controller('socialMedia')
export class SocialMediaController {
  constructor(
    @Inject(SocialMediaService)
    private readonly socialMediaService: SocialMediaService,
  ) {}

  @Get('/:id')
  async get(@Param('id') socialMediaId: string) {
    const socialMedia = await this.socialMediaService.findOne({
      socialMediaId,
    });
    const response = SocialMediaDtoMapper.toResponse({ socialMedia });
    return { data: response };
  }
}
