/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ConfigService } from '@nestjs/config';

// import * as dotenv from 'dotenv';
require('dotenv').config({ path: `../${process.env.NODE_ENV}.env` });


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = environment.API_PORT || 3333;
  await app.listen(port, () => {
    if (!environment.production) {
      Logger.debug(`${config.get('environment')}`, 'NODE_ENV');
      Logger.debug(environment.API_SIMPLES_TYPEORM_HOSTNAME, 'HOSTNAME');
      Logger.debug(environment.API_SIMPLES_TYPEORM_USERNAME, 'USERNAME');
      Logger.debug(environment.API_SIMPLES_TYPEORM_PASSWORD, 'PASSWORD');
      Logger.debug(environment.API_SIMPLES_TYPEORM_DATABASE, 'DATABASE');
    }
    Logger.debug(`😃 Running in ${config.get('environment')} mode at http://localhost:${port}/${globalPrefix}`, 'RUNNNING');
  });
}

bootstrap();
