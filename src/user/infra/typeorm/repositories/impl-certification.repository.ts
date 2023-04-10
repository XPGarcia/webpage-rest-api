import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CertificationMapper } from '../mappers';
import { Certification } from '../../../domain/entities';
import { CertificationRepository } from '../../../domain/contracts/repositories';
import { CertificationEntity } from '../entities';

@Injectable()
export class ImplCertificationRepository implements CertificationRepository {
  constructor(
    @InjectRepository(CertificationEntity)
    private readonly repository: Repository<CertificationEntity>,
  ) {}

  async find({ userId }: { userId: string }): Promise<Certification[]> {
    const entities = await this.repository.find({
      where: { user: { id: userId } },
    });

    return CertificationMapper.toDomains({ entities });
  }
}
