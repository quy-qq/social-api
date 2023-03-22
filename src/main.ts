import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { SwaggerClient } from './config/swagger/client.swagger';
import { SwaggerCms } from './config/swagger/cms.swagger';

require('dotenv').config();

const bodyParser = require('body-parser');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['log', 'error', 'debug', 'verbose', 'warn', 'error'],
  });

  /**
   * Swagger config
   */

  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.enableCors();
  app.setGlobalPrefix('api/');
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  SwaggerClient(app);
  SwaggerCms(app);
  await app.listen(process.env.PORT || 3002, () => {
    Logger.log(
      `Server running on http://localhost:3002`,
      `Server document API BACKEND running on http://localhost:3002/client`,
      'Server document API BACKEND running on http://localhost:3002/backend',
      'Bootstrap',
    );
  });
}
bootstrap();
