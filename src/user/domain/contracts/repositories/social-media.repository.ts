import { SocialMedia } from '../../entities';

export interface SocialMediaRepository {
  findOne({ socialMediaId }: { socialMediaId: string }): Promise<SocialMedia>;
}

export const SocialMediaRepository = Symbol('SocialMediaRepository');
