import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { WebSocketGateway } from '@nestjs/websockets';
import { AppModule } from './app.module';
import { SwaggerClient } from './config/swagger/client.swagger';
require('dotenv').config();

const bodyParser = require('body-parser');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'debug', 'verbose', 'warn', 'error'],
  });

  /**
   * Swagger config
   */
  SwaggerClient(app);
  //SwaggerCms(app);
  // app.enableVersioning({
  //   type: VersioningType.URI,
  // });
  app.enableCors();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  await app.listen(process.env.PORT || 3000, () => {
    Logger.log(
      `Server running on http://localhost:3000`,
      `Server document API BACKEND running on http://localhost:3000/client`,
      'Bootstrap',
    );
  });
}
bootstrap();
