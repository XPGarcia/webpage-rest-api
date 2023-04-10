import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { jwtHandler } from '@prometeo-dev/jwt-handler-library/dist/middlewares';

@Injectable()
export class JWTMiddleware implements NestMiddleware {
  constructor(private readonly configService: ConfigService) {
    const jwtSecretKey = this.configService.get<string>('jwtSecretKey');

    this.use = jwtHandler({
      jwtHeaderName: 'authorization',
      secret: jwtSecretKey,
      debugMode: true,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  use(req: any, res: any, next: (error?: any) => void) {}
}
