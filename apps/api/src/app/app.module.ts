import { Logger, Module } from '@nestjs/common';
import { LibApiCoreModule } from '@simples/lib-api-core';

import { environment } from '../environments/environment';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [LibApiCoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {}
}
