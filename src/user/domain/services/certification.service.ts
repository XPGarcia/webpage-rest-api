import { Inject, Injectable } from '@nestjs/common';
import { CertificationRepository } from '../contracts/repositories/';
import { Certification } from '../entities/';

@Injectable()
export class CertificationService {
  constructor(
    @Inject(CertificationRepository)
    private readonly certificationRepository: CertificationRepository,
  ) {}

  async find({ userId }: { userId: string }): Promise<Certification[]> {
    return await this.certificationRepository.find({ userId });
  }
}
