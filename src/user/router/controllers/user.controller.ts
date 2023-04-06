import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { UserService } from '../../domain/services';
import { CreateUserDto } from '../dtos';
import { UserDtoMapper } from '../mappers';

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

  @Get('/:id')
  async get(@Param('id') userId: string) {
    const user = await this.userService.findOne({ userId });
    const response = UserDtoMapper.toResponse({ user });
    return { data: response };
  }
}
