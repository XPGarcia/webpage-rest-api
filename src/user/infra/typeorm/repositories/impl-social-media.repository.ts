import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { SocialMediaMapper } from '../mappers';
import { SocialMedia } from '../../../domain/entities';
import { SocialMediaRepository } from '../../../domain/contracts/repositories';
import { SocialMediaEntity } from '../entities';

@Injectable()
export class ImplSocialMediaRepository implements SocialMediaRepository {
  constructor(
    @InjectRepository(SocialMediaEntity)
    private readonly repository: Repository<SocialMediaEntity>,
  ) {}

  async findOne({ userId }: { userId: string }): Promise<SocialMedia> {
    const entity = await this.repository.findOne({ where: { id: userId } });

    return SocialMediaMapper.toDomain({ entity });
  }
}
