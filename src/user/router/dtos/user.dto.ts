import { Transform } from 'class-transformer';
import {
  IsString,
  IsEmail,
  IsOptional,
  IsBoolean,
  IsDate,
} from 'class-validator';
import { toBoolean } from 'src/shared/router/helpers';
import { UserLanguage } from 'src/user/domain/entities';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsDate()
  birthDate: Date;

  @IsString()
  role: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsString()
  description: string;

  @IsBoolean()
  available: boolean;

  @IsString()
  nationality: string;
}

export class FindUserQueryParams {
  @Transform(({ value }) => toBoolean(value))
  @IsOptional()
  @IsBoolean()
  withLanguages?: boolean;
}

export interface UserResponse {
  id: string;
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
  languages?: UserLanguage[];
}
