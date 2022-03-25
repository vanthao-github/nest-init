import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';
import Config, { AppConfig } from '#configs';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  // Load configs
  const appConfig = config.get(Config.App) as AppConfig;

  // const swaggerConfig = config.get(Config.Swagger) as SwaggerConfig;
  await app.listen(appConfig.port);
}
bootstrap();
