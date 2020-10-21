export const environment = {
  production: false,
  environment: 'qa',
  TIMEZONE: 'America/Sao_Paulo',

  API_BASE_TYPEORM_TYPE: process.env.API_BASE_TYPEORM_TYPE,
  API_BASE_TYPEORM_HOST: process.env.API_BASE_TYPEORM_HOST,
  API_BASE_TYPEORM_DATABASE: process.env.API_BASE_TYPEORM_DATABASE,
  API_BASE_TYPEORM_USERNAME: process.env.API_BASE_TYPEORM_USERNAME,
  API_BASE_TYPEORM_PASSWORD: process.env.API_BASE_TYPEORM_PASSWORD,
  API_BASE_TYPEORM_PORT: process.env.API_BASE_TYPEORM_PORT,
  API_BASE_TYPEORM_SYNCHRONIZE: true,

  API_PORT: 3000,
  API_HOST: 'localhost',
  JWT_SECRET: 'secredinhos 3D'
}
