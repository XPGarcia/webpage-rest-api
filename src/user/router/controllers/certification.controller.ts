import { Controller, Get, Inject } from '@nestjs/common';
import { CertificationService } from '../../domain/services';
import { CertificationDtoMapper } from '../mappers';
import { JWT } from 'src/shared/router/decorators/jwt.decorator';

@Controller('certification')
export class CertificationController {
  constructor(
    @Inject(CertificationService)
    private readonly certificationService: CertificationService,
  ) {}

  @Get('/')
  async find(@JWT('sub') userId: string) {
    const certificationList = await this.certificationService.find({
      userId,
    });
    const response = CertificationDtoMapper.toResponses({ certificationList });
    return { data: response };
  }
}
