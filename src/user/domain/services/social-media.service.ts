import { Inject, Injectable } from '@nestjs/common';
import { SocialMediaRepository } from '../contracts/repositories/';
import { SocialMedia } from '../entities/';
import { NotFoundError } from '@prometeo-dev/error-handler-library/dist/errors';

@Injectable()
export class SocialMediaService {
  constructor(
    @Inject(SocialMediaRepository)
    private readonly socialMediaRepository: SocialMediaRepository,
  ) {}

  async findOne({
    socialMediaId,
  }: {
    socialMediaId: string;
  }): Promise<SocialMedia> {
    const socialMedia = await this.socialMediaRepository.findOne({
      socialMediaId,
    });
    if (!socialMedia)
      throw new NotFoundError({ message: 'Social Media not Found' });

    return socialMedia;
  }
}
