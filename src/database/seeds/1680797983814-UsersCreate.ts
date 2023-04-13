import { Seeder } from '@jorgebodega/typeorm-seeding';
import { Connection } from 'typeorm';
import { UserFactory } from '../factories/user.factory';
import { LanguageFactory } from '../factories/language.factory';
import { UserLanguageFactory } from '../factories/user-language.factory';
import {
  CertificationEntity,
  EducationEntity,
  ExperienceEntity,
  ProjectEntity,
  UserEntity,
  UserLanguageEntity,
  UserSkillEntity,
} from 'src/user/infra/typeorm/entities';
import { SkillFactory } from '../factories/skill.factory';
import { UserSkillFactory } from '../factories/user-skill.factory';
import { ExperienceFactory } from '../factories/experience.factory';
import { EducationFactory } from '../factories/education.factory';
import { Education, Certification } from 'src/user/domain/entities';
import { CertificationFactory } from '../factories/certification.factory';
import { SocialMediaFactory } from '../factories/social-media.factory';
import { ProjectFactory } from '../factories/project.factory';

export class UsersCreate extends Seeder {
  async run(connection: Connection) {
    const user = await new UserFactory().create({
      id: '03c8d570-9b7d-4b96-b9b4-49228ddb7f80',
      socialMedia: await this.createSocialMedia(),
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

    const userSkills = await this.createSkills(user);

    await this.createExperienceList(user);

    await this.createEducationList(user);

    await this.createCertificationList(user);

    await this.createProjects(user, userSkills);
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
      { name: 'JavaScript', percentage: 90 },
      { name: 'TypeScript', percentage: 80 },
      { name: 'Angular', percentage: 80 },
      { name: 'React', percentage: 60 },
      { name: 'HTML & CSS', percentage: 80 },
      { name: 'Nodejs', percentage: 60 },
      { name: 'PHP', percentage: 50 },
      { name: 'SQL', percentage: 80 },
      { name: 'AWS', percentage: 50 },
      { name: 'Firebase', percentage: 50 },
      { name: 'Godot', percentage: 40 },
      { name: 'Docker', percentage: 40 },
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

  async createCertificationList(user: UserEntity) {
    const certificationList: Certification[] = [
      {
        date: new Date('2023-03-01'),
        title: 'Certified Cloud Practitioner',
        institution: 'AWS',
        description:
          'Achieved AWS Certified Cloud Practitioner certification from Amazon Web Services, validating in-depth knowledge of fundamental AWS Cloud concepts, such as cloud architecture, pricing, security, compliance, and core services.',
      },
    ];

    const certificationFactory = new CertificationFactory();

    const userCertificationList: CertificationEntity[] = [];

    for (const certification of certificationList) {
      userCertificationList.push(
        await certificationFactory.create({
          user,
          date: certification.date,
          title: certification.title,
          institution: certification.institution,
          description: certification.description,
        }),
      );
    }
    return userCertificationList;
  }

  async createSocialMedia() {
    const socialMediaFactory = new SocialMediaFactory();

    const socialMedia = await socialMediaFactory.create({
      github: 'https://github.com/XPGarcia',
      linkedin: 'https://www.linkedin.com/in/xavier-garcia-bano-244b60245/',
    });
    return socialMedia;
  }

  async createProjects(user: UserEntity, userSkills: UserSkillEntity[]) {
    const getUserSkills = (projectSkillNames: string[]) => {
      return userSkills.filter((userSkill) => {
        const hasSkill = projectSkillNames.some(
          (skillName) =>
            skillName.toLocaleLowerCase() ===
            userSkill.skill.name.toLocaleLowerCase(),
        );
        if (hasSkill) return userSkill;
      });
    };

    const projects = [
      {
        code: 'proalco',
        title: 'Proalco',
        imageUrl: '/images/proalco-banner.jpg',
        clientName: 'Proalco',
        previewUrl: 'https://www.proalco.com/inicio',
        description:
          'Proalco is a company that specializes in distributing high-quality food and beverages. To showcase its products, values, and work environment, Proalco has developed a website as a marketing tool. The project features a fully functional and responsive webpage that accurately reflects the original figma design and meets the client standards',
        bulletPoints: [
          'From figma design to production-ready code of the entire webpage using Angular through the creation of modular components for each section of the page, implementing the design with HTML and SCSS, and writing TypeScript code to make the components interactive and responsive',
          "Using AWS Amplify for hosting to deploy and manage the application in the cloud. Implemented CI/CD, using the platform's automated build, test, and deployment processes. Configured continuous integration workflows with GitHub repository",
          "Implemented AWS SES for a mailing service to send and track large volumes of emails reliably and securely. Configured SES to integrate with the application's email templates and user data collected in the contact form",
        ],
        skills: getUserSkills(['TypeScript', 'Angular', 'HTML & CSS', 'AWS']),
      },
      {
        code: 'livet-medical-center',
        title: 'Livet Medical Center',
        clientName: 'Livet Medical Center',
        imageUrl: '/images/livet-banner.jpg',
        previewUrl: 'https://master.d2k1849fzd5ls4.amplifyapp.com',
        description:
          'Livet Medical Center enables efficient scheduling and management of medical appointments at a healthcare facility. With a user-friendly interface, doctors can easily record and access essential patient data, including medical history, to provide personalized care. The system is designed to streamline the administrative process and help doctors focus on delivering high-quality medical services to their patients',
        bulletPoints: [
          'Design and develop of the web application using React with Redux and Material UI, delivering a good user experience while adhering to best practices and industry coding standards',
          'Use of Redux for state management in a complex web application, providing efficient and centralized data flow to ensure optimal performance and maintainability',
          "AWS Amplify for hosting to deploy and manage the application in the cloud. Implemented CI/CD, using the platform's automated build, test, and deployment processes. Configured continuous integration workflows with GitHub repository",
          'Use of AWS Cognito to implement secure and reliable authentication and authorization mechanisms, ensuring robust security and compliance with industry standards',
        ],
        skills: getUserSkills(['JavaScript', 'React', 'HTML & CSS', 'AWS']),
      },
      {
        code: 'find-the-puppet',
        title: 'Find the Puppet',
        imageUrl: '/images/game-banner.jpg',
        previewUrl: 'https://melgabson.itch.io/find-the-puppet',
        description:
          'Find the Puppet is an engaging multiplayer online card game that challenges five players to use their social skills and deduction abilities to determine the factions of their opponents with a focus on delivering a fun and immersive gaming experience. The project features a real-time communication architecture built on websockets that facilitates seamless interactions between clients and server, ensuring smooth gameplay and quick response times',
        bulletPoints: [
          'Built a highly performant WebSocket server using Node.js, Express, and ws, enabling real-time, bidirectional communication between clients and server It includes a robust room system that enables multiple games to be hosted simultaneously',
          'Effectively bidirectional communication, enabling the delivery of private messages from the server to specific clients and the broadcasting of messages to all clients within the same game room',
          'Deployed a Node.js WebSocket server on AWS EC2, using SSL/TLS encryption to enable HTTPS communication and ensure secure data transmission in the web',
          'Developed the client side game using the Godot engine, using GDScripting and its powerful toolset. Hosted the game on itch.io, leveraging its built-in marketing and promotional features',
        ],
        skills: getUserSkills(['TypeScript', 'Nodejs', 'Godot', 'AWS']),
      },
      {
        code: 'prometeo-shop',
        title: 'Prometeo Shop',
        imageUrl: '/images/prometeo-shop-banner.jpg',
        description:
          'The project is an e-commerce platform that uses a headless Content Management System (CMS) to manage products, enabling the e-commerce website to have a unique and customizable design. Additionally, the backend is a REST API based on microservices to provide communication between the different components. Using a microservices architecture, the project is built using Domain-Driven Design (DDD) and Hexagonal Architecture',
        bulletPoints: [
          'Developed multiple RESTful API utilizing Domain-Driven Design (DDD) and Hexagonal Architecture, resulting in a highly maintainable and scalable system that emphasizes business rules and separation of concerns',
          'Use of microservices for better separation of concerns and the ability to easily maintain and update individual components of the system. Microservices with Docker containers to create a highly scalable and flexible system that can easily handle increased traffic and usage',
          'Developed multiple RESTful APIs using the NestJS framework, leveraging its powerful features such as dependency injection, modules, and decorators to create highly maintainable and testable code. Implemented secure authentication using API keys. Use of a custom error handling library in all microservices, resulting in a standardized and consistent approach to error handling across the entire application',
          'Development of the e-commerce CMS using Angular for dynamic components and real-time updates, and Tailwind CSS for rapid styling of UI components with minimal CSS code',
        ],
        skills: getUserSkills([
          'TypeScript',
          'Angular',
          'HTML & CSS',
          'Nodejs',
          'SQL',
          'Docker',
        ]),
      },
    ];

    const projectFactory = new ProjectFactory();

    const userProjects: ProjectEntity[] = [];

    for (const project of projects) {
      userProjects.push(
        await projectFactory.create({
          user,
          code: project.code,
          title: project.title,
          imageUrl: project.imageUrl,
          clientName: project.clientName,
          previewUrl: project.previewUrl,
          description: project.description,
          bulletPoints: project.bulletPoints,
          skills: project.skills,
        }),
      );
    }
    return userProjects;
  }
}
