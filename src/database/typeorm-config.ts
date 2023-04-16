import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';

export const typeormConfig = {
  type: 'postgres' as const,
  host: process.env.POSTGRESQL_HOST || 'localhost',
  url: process.env.POSTGRESQL_URL,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.POSTGRESQL_USERNAME || 'postgres',
  password: process.env.POSTGRESQL_PASSWORD || 'password',
  database: process.env.POSTGRESQL_DATABASE,
  entities: [`${__dirname}/../**/*.entity.{js,ts}`],
  subscribers: [`${__dirname}/../**/*.subscriber.{js,ts}`],
  migrations: [`${__dirname}/migrations/*.{js,ts}`],
  factories: [`${__dirname}/factories/*.{js,ts}`],
  seeds: [`${__dirname}/seeds/*.{js,ts}`],
  cli: {
    migrationsDir: __dirname + '/migrations',
  },
};

export function typeormConfigBuilder(
  configService: ConfigService,
): TypeOrmModuleOptions {
  return {
    type: 'postgres' as const,
    host: configService.get<string>('POSTGRESQL_HOST'),
    port: configService.get<number>('POSTGRESQL_PORT') || 5432,
    username: configService.get<string>('POSTGRESQL_USERNAME'),
    password: configService.get<string>('POSTGRESQL_PASSWORD'),
    database: configService.get<string>('POSTGRESQL_DATABASE'),
    entities: [`${__dirname}/../**/*.entity.{js,ts}`],
    subscribers: [`${__dirname}/../**/*.subscriber.{js,ts}`],
    migrations: [`${__dirname}/migrations/*.{js,ts}`],
  };
}
