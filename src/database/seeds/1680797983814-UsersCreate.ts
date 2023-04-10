import { Seeder } from '@jorgebodega/typeorm-seeding';
import { Connection } from 'typeorm';
import { UserFactory } from '../factories/user.factory';
import { LanguageFactory } from '../factories/language.factory';
import { UserLanguageFactory } from '../factories/user-language.factory';
import {
  EducationEntity,
  ExperienceEntity,
  UserEntity,
  UserLanguageEntity,
  UserSkillEntity,
} from 'src/user/infra/typeorm/entities';
import { SkillFactory } from '../factories/skill.factory';
import { UserSkillFactory } from '../factories/user-skill.factory';
import { ExperienceFactory } from '../factories/experience.factory';
import exp from 'constants';
import { EducationFactory } from '../factories/education.factory';
import { Education } from 'src/user/domain/entities';

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

    await this.createExperienceList(user);

    await this.createEducationList(user);
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

    const userLanguages: UserLanguageEntity[] = [];

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

    const userSkills: UserSkillEntity[] = [];

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

  async createExperienceList(user: UserEntity) {
    const experienceList = [
      {
        dateFrom: new Date('2021-11-01'),
        dateTo: new Date('2022-06-01'),
        role: 'Full-stack developer',
        companyName: 'WOMPAD S.A',
        description:
          'Maintenance and development of new functionalities in the personalized template for e-commerce Kapalia (NOT WordPress). Use of JavaScript and JQuery in the client and PHP in the server. Database management in MySQL.',
      },
      {
        dateFrom: new Date('2022-01-01'),
        dateTo: new Date('2022-02-01'),
        role: 'Full-stack developer',
        companyName: 'Proalco',
        description:
          'From Figma design to production-ready code. Creation of the website using Angular, SCSS, and AWS for a food and beverage distribution company. Hosting of the web page with AWS amplify and mailing service through AWS SES.',
      },
      {
        dateFrom: new Date('2021-06-01'),
        dateTo: new Date('2021-10-01'),
        role: 'Full-stack developer',
        companyName: 'Box Solutions',
        description:
          'Development of a web application to collect large amounts of information from farmers using Angular as the front-end framework to create a SPA and Firebase for the serverless authentication and database with Firestore.',
      },
    ];

    const experienceFactory = new ExperienceFactory();

    const userExperienceList: ExperienceEntity[] = [];

    for (const experience of experienceList) {
      userExperienceList.push(
        await experienceFactory.create({
          user,
          dateFrom: experience.dateFrom,
          dateTo: experience.dateTo,
          role: experience.role,
          company: experience.companyName,
          description: experience.description,
        }),
      );
    }
    return userExperienceList;
  }

  async createEducationList(user: UserEntity) {
    const educationList: Education[] = [
      {
        dateFrom: new Date('2018-10-01'),
        title: 'Computer science degree',
        institution: 'ESPOL',
        description:
          'Relevant courses to be a software engineer like: Algorithm analysis, Data structure, Database system, Software Engineering, Operating systems, Cloud Computing, Development of web and mobile applications.',
      },
    ];

    const educationFactory = new EducationFactory();

    const userEducationList: EducationEntity[] = [];

    for (const experience of educationList) {
      userEducationList.push(
        await educationFactory.create({
          user,
          dateFrom: experience.dateFrom,
          dateTo: experience.dateTo,
          title: experience.title,
          institution: experience.institution,
          description: experience.description,
        }),
      );
    }
    return userEducationList;
  }
}
