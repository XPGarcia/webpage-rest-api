import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ExperienceService, UserService } from '../../domain/services';
import { CreateUserDto, FindUserQueryParams } from '../dtos';
import { ExperienceDtoMapper, UserDtoMapper } from '../mappers';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserService)
    private readonly userService: UserService,
    @Inject(ExperienceService)
    private readonly experienceService: ExperienceService,
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
}
