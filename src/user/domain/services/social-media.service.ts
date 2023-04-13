import { Inject, Injectable } from '@nestjs/common';
import { SocialMediaRepository } from '../contracts/repositories/';
import { SocialMedia } from '../entities/';

@Injectable()
export class SocialMediaService {
  constructor(
    @Inject(SocialMediaRepository)
    private readonly socialMediaRepository: SocialMediaRepository,
  ) {}

  async findOne({ userId }: { userId: string }): Promise<SocialMedia> {
    return await this.socialMediaRepository.findOne({ userId });
  }
}
