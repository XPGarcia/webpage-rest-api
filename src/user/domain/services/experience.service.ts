import { Inject, Injectable } from '@nestjs/common';
import { ExperienceRepository } from '../contracts/repositories/';
import { Experience } from '../entities/';

@Injectable()
export class ExperienceService {
  constructor(
    @Inject(ExperienceRepository)
    private readonly experienceRepository: ExperienceRepository,
  ) {}

  async find({ userId }: { userId: string }): Promise<Experience[]> {
    return await this.experienceRepository.find({ userId });
  }
}
