import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { configuration } from './config/configuration';
import { DatabaseConfig } from './config/database.config';
import { validationSchema } from './config/validation';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class LibApiCoreModule {}

// import { Module } from '@nestjs/common';

// @Module({
//   controllers: [],
//   providers: [],
//   exports: [],
// })
// export class LibApiCoreModule {}
