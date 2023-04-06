import { Seeder } from '@jorgebodega/typeorm-seeding';
import { Connection } from 'typeorm';
import { UserFactory } from '../factories/user.factory';
import { LanguageFactory } from '../factories/language.factory';
import { UserLanguageFactory } from '../factories/user-language.factory';
import { UserEntity } from 'src/user/infra/typeorm/entities';

export class UsersCreate extends Seeder {
  async run(connection: Connection) {
    const user = await new UserFactory().create({
      id: '03c8d570-9b7d-4b96-b9b4-49228ddb7f80',
      firstName: 'Xavier',
      lastName: 'García',
      birthDate: new Date('1997-12-19'),
      role: 'Full-Stack Developer',
      email: 'xavier.garcia@prometeo.dev',
      phone: '+593959795664',
      address: 'Ecuador',
      description:
        "I'm a Ecuadorian based full-stack web developer with a passion for creating exceptional software and innovative experiences, I am committed to delivering high-quality web applications that meet the needs of my clients and users.",
      available: true,
      nationality: 'Ecuadorian',
    });

    const userLanguages = await this.createLanguages(user);
  }

  async createLanguages(user: UserEntity) {
    const languageFactory = new LanguageFactory();
    const userLanguageFactory = new UserLanguageFactory();

    const l1 = await languageFactory.create({
      name: 'English',
    });
    const userL1 = await userLanguageFactory.create({
      user: user,
      language: l1,
      level: 8,
    });

    const l2 = await languageFactory.create({
      name: 'Spanish',
    });
    const userL2 = await userLanguageFactory.create({
      user: user,
      language: l2,
      level: 10,
    });

    const l3 = await languageFactory.create({
      name: 'German',
    });
    const userL3 = await userLanguageFactory.create({
      user: user,
      language: l3,
      level: 6,
    });
    return [userL1, userL2, userL3];
  }
}
