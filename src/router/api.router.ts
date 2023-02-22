import { Routes } from '@nestjs/core';

import { ClientModule } from 'src/modules/api/client/client.module';
import { ClientRouteApi } from './client.router';

export const ApiRoute: Routes = [
  {
    path: 'client',
    module: ClientModule,
    children: ClientRouteApi,
  },
];
