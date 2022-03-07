import configuration from './configuration';
import { registerAs } from '@nestjs/config';

export default registerAs('app', () => {
  const config = configuration();

  return {
    port: config.app.port || 3000,
  };
});
