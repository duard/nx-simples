import { join } from 'path';

export const configuration = () => ({
  environment: process.env.NODE_ENV,
  port: parseInt(process.env.PORT || '3000', 10),

  jwtSecret: process.env.JWT_SECRET,
  database: {

    port: Number(process.env.API_SIMPLES_TYPEORM_PORT),
    type: process.env.API_SIMPLES_TYPEORM_TYPE || 'mysql',
    synchronize: process.env.API_SIMPLES_TYPEORM_SYNCHRONIZE,

    host: process.env.API_SIMPLES_TYPEORM_HOSTNAME,
    username: process.env.API_SIMPLES_TYPEORM_USERNAME,
    password: process.env.API_SIMPLES_TYPEORM_PASSWORD,
    database: process.env.API_SIMPLES_TYPEORM_DATABASE,

    entities: [
      __dirname + '/../**/*.entity{.ts,.js}',
      'libs/typeorm/src/lib/entity/**/*.entity{.ts,.js}',
      'libs/lib-api-cruds/src/lib/entity/**/*.entity{.ts,.js}',
      join(__dirname, './**/*.entity{.ts,.js}'),
      '../../../../../libs/lib-api-cruds/src/lib/*.entity{.ts,.js}',
    ],
    // logging: 'all',
    autoLoadEntities: true,
    // entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
  },
});
