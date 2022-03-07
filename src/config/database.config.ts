import configuration from './configuration';
import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {
  const config = configuration();

  return {
    host: process.env.DATABASE_HOST || config.database.host || '127.0.0.1',
    port: process.env.DATABASE_PORT || config.database.port || 3306,
    database: config.database.name,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    type: 'mariadb',
    synchronize: process.env.NODE_ENV === 'development' ? true : false,
  };
});
