import { SocialMedia } from '../../entities';

export interface SocialMediaRepository {
  findOne({ userId }: { userId: string }): Promise<SocialMedia>;
}

export const SocialMediaRepository = Symbol('SocialMediaRepository');
