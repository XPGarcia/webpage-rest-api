export class SocialMedia {
  id?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;

  constructor({
    id,
    github,
    linkedin,
    twitter,
    facebook,
    instagram,
  }: {
    id?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  }) {
    this.id = id;
    this.github = github;
    this.linkedin = linkedin;
    this.twitter = twitter;
    this.facebook = facebook;
    this.instagram = instagram;
  }
}
