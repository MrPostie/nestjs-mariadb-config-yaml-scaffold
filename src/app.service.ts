import { Inject, Injectable } from '@nestjs/common';
import databaseConfig from './config/database.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    @Inject(databaseConfig.KEY)
    private config: ConfigType<typeof databaseConfig>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
}
