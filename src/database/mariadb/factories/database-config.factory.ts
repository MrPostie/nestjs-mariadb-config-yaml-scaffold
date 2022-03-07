import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfigFactory = (configService: ConfigService) => {
  const databaseConfig = configService.get<TypeOrmModuleOptions>('database');

  const config = {
    ...databaseConfig,
    autoLoadEntities: true,
  };

  return config;
};
