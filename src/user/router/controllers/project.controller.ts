import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ProjectService } from '../../domain/services';
import { ProjectDtoMapper } from '../mappers';
import { JWT } from 'src/shared/router/decorators/jwt.decorator';

@Controller('project')
export class ProjectController {
  constructor(
    @Inject(ProjectService)
    private readonly projectService: ProjectService,
  ) {}

  @Get('/')
  async find(@JWT('sub') userId: string) {
    const projects = await this.projectService.find({
      userId,
    });
    const response = ProjectDtoMapper.toResponses({ projects });
    return { data: response };
  }

  @Get('/:id')
  async get(@Param('id') projectId: string) {
    const project = await this.projectService.findOne({
      projectId,
    });
    const response = ProjectDtoMapper.toResponse({ project });
    return { data: response };
  }

  @Get('byCode/:code')
  async getByUserIdAndCode(
    @Param('code') code: string,
    @JWT('sub') userId: string,
  ) {
    const project = await this.projectService.findOneByUserIdAndCode({
      userId,
      code,
    });
    const response = ProjectDtoMapper.toResponse({ project });
    return { data: response };
  }
}
