import { SocialMedia } from './social-media.entity';
import { UserLanguage } from './user-language.entity';

export class User {
  id?: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  role: string;
  email: string;
  phone?: string;
  address?: string;
  description: string;
  available: boolean;
  nationality: string;
  socialMedia?: SocialMedia;
  languages?: UserLanguage[];

  constructor({
    id,
    firstName,
    lastName,
    birthDate,
    role,
    email,
    phone,
    address,
    description,
    available,
    nationality,
    socialMedia,
    languages,
  }: {
    id?: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    role: string;
    email: string;
    phone?: string;
    address?: string;
    description: string;
    available: boolean;
    nationality: string;
    socialMedia?: SocialMedia;
    languages?: UserLanguage[];
  }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.role = role;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.description = description;
    this.available = available;
    this.nationality = nationality;
    this.socialMedia = socialMedia;
    this.languages = languages;
  }
}
