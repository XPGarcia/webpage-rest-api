import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import {
  CertificationService,
  EducationService,
  ExperienceService,
  ProjectService,
  SocialMediaService,
  UserService,
} from '../../domain/services';
import { CreateUserDto, FindUserQueryParams } from '../dtos';
import {
  CertificationDtoMapper,
  EducationDtoMapper,
  ExperienceDtoMapper,
  ProjectDtoMapper,
  SocialMediaDtoMapper,
  UserDtoMapper,
} from '../mappers';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserService)
    private readonly userService: UserService,
    @Inject(ExperienceService)
    private readonly experienceService: ExperienceService,
    @Inject(EducationService)
    private readonly educationService: EducationService,
    @Inject(CertificationService)
    private readonly certificationService: CertificationService,
    @Inject(SocialMediaService)
    private readonly socialMediaService: SocialMediaService,
    @Inject(ProjectService)
    private readonly projectService: ProjectService,
  ) {}

  @Post('/')
  async create(@Body() payload: CreateUserDto) {
    const user = UserDtoMapper.createDtoToDomain({ dto: payload });
    const createdUser = await this.userService.create({
      user,
    });
    const response = UserDtoMapper.toResponse({ user: createdUser });
    return { data: response };
  }

  @Get('/:id')
  async get(
    @Param('id') userId: string,
    @Query() queryParams?: FindUserQueryParams,
  ) {
    const user = await this.userService.findOne({
      userId,
      filters: queryParams,
    });
    const response = UserDtoMapper.toResponse({ user });
    return { data: response };
  }

  @Get('/:id/experience')
  async getExperienceList(@Param('id') userId: string) {
    const experienceList = await this.experienceService.find({
      userId,
    });
    const response = ExperienceDtoMapper.toResponses({ experienceList });
    return { data: response };
  }

  @Get('/:id/education')
  async getEducationList(@Param('id') userId: string) {
    const educationList = await this.educationService.find({
      userId,
    });
    const response = EducationDtoMapper.toResponses({ educationList });
    return { data: response };
  }

  @Get('/:id/certification')
  async getCertificationList(@Param('id') userId: string) {
    const certificationList = await this.certificationService.find({
      userId,
    });
    const response = CertificationDtoMapper.toResponses({ certificationList });
    return { data: response };
  }

  @Get('/:id/socialMedia')
  async getSocialMedia(@Param('id') userId: string) {
    const socialMedia = await this.socialMediaService.findOne({
      userId,
    });
    const response = SocialMediaDtoMapper.toResponse({ socialMedia });
    return { data: response };
  }

  @Get('/:id/projects')
  async getProjects(@Param('id') userId: string) {
    const projects = await this.projectService.find({
      userId,
    });
    const response = ProjectDtoMapper.toResponses({ projects });
    return { data: response };
  }
}
