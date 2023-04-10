import { Inject, Injectable } from '@nestjs/common';
import { EducationRepository } from '../contracts/repositories/';
import { Education } from '../entities/';

@Injectable()
export class EducationService {
  constructor(
    @Inject(EducationRepository)
    private readonly educationRepository: EducationRepository,
  ) {}

  async find({ userId }: { userId: string }): Promise<Education[]> {
    return await this.educationRepository.find({ userId });
  }
}
