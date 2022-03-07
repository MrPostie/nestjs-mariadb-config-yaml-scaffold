import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MariaDbModule } from './database/mariadb/mariadb.module';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './config/database.config';
import appConfig from './config/app.config';
// import configuration from './config/configuration';

@Module({
  imports: [
    MariaDbModule,
    ConfigModule.forRoot({
      load: [appConfig, databaseConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
