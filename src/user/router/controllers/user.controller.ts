import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { UserService } from '../../domain/services';
import { CreateUserDto, FindUserQueryParams } from '../dtos';
import { UserDtoMapper } from '../mappers';
import { JWT } from 'src/shared/router/decorators/jwt.decorator';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserService)
    private readonly userService: UserService,
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

  @Get('/')
  async get(
    @JWT('sub') userId: string,
    @Query() queryParams?: FindUserQueryParams,
  ) {
    const user = await this.userService.findOne({
      userId,
      filters: queryParams,
    });
    const response = UserDtoMapper.toResponse({ user });
    return { data: response };
  }
}
