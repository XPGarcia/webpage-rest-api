import { Seeder } from '@jorgebodega/typeorm-seeding';
import { Connection } from 'typeorm';
import { UserFactory } from '../factories/user.factory';
import { LanguageFactory } from '../factories/language.factory';
import { UserLanguageFactory } from '../factories/user-language.factory';
import { UserEntity } from 'src/user/infra/typeorm/entities';
import { SkillFactory } from '../factories/skill.factory';
import { UserSkillFactory } from '../factories/user-skill.factory';

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

    await this.createLanguages(user);

    await this.createSkills(user);
  }

  async createLanguages(user: UserEntity) {
    const languages = [
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'German',
        level: 6,
      },
    ];

    const languageFactory = new LanguageFactory();
    const userLanguageFactory = new UserLanguageFactory();

    const userLanguages = [];

    for (const { name, level } of languages) {
      const language = await languageFactory.create({
        name,
      });
      const userLanguage = await userLanguageFactory.create({
        user,
        language,
        level,
      });
      userLanguages.push(userLanguage);
    }
    return userLanguages;
  }

  async createSkills(user: UserEntity) {
    const skills = [
      { name: 'javascript', percentage: 90 },
      { name: 'typescript', percentage: 80 },
      { name: 'angular', percentage: 80 },
      { name: 'react', percentage: 60 },
      { name: 'html & css', percentage: 80 },
      { name: 'nodejs', percentage: 60 },
      { name: 'php', percentage: 50 },
      { name: 'sql', percentage: 80 },
      { name: 'aws', percentage: 50 },
      { name: 'firebase', percentage: 50 },
      { name: 'godot', percentage: 40 },
      { name: 'docker', percentage: 40 },
    ];

    const skillFactory = new SkillFactory();
    const userSkillFactory = new UserSkillFactory();

    const userSkills = [];

    for (const { name, percentage } of skills) {
      const skill = await skillFactory.create({
        name,
      });
      const userSkill = await userSkillFactory.create({
        user,
        skill: skill,
        percentage,
      });
      userSkills.push(userSkill);
    }
    return userSkills;
  }
}
