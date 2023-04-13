import { SocialMedia } from 'src/user/domain/entities';
import { SocialMediaResponse } from '../dtos';

export class SocialMediaDtoMapper {
  public static toResponse({
    socialMedia,
  }: {
    socialMedia?: SocialMedia;
  }): SocialMediaResponse {
    if (!socialMedia) return {};

    return {
      id: socialMedia.id,
      github: socialMedia.github,
      linkedin: socialMedia.linkedin,
      twitter: socialMedia.twitter,
      facebook: socialMedia.facebook,
      instagram: socialMedia.instagram,
    };
  }

  public static toResponses({
    socialMediaList,
  }: {
    socialMediaList: SocialMedia[];
  }): SocialMediaResponse[] {
    return socialMediaList.map((socialMedia) =>
      this.toResponse({ socialMedia }),
    );
  }
}
