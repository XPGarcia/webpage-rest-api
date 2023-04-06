import { Language } from './language.entity';

export class UserLanguage extends Language {
  level: number;

  constructor({
    id,
    name,
    level,
  }: {
    id?: string;
    name: string;
    level: number;
  }) {
    super({ id, name });
    this.level = level;
  }
}
