import {
  UserModule,
  PostModule,
  LikeModule,
  CommentModule,
  ChattingModule,
  UploadModule,
} from 'src/modules/api/client';
import { RecommentModule } from 'src/modules/api/client/recomment/recomment.module';

export const ClientRouteApi = [
  {
    path: 'upload',
    module: UploadModule,
  },
  {
    path: 'user',
    module: UserModule,
  },
  {
    path: 'post',
    module: PostModule,
  },
  {
    path: 'like',
    module: LikeModule,
  },
  {
    path: 'comment',
    module: CommentModule,
  },
  {
    path: 'chatting',
    module: ChattingModule,
  },
  {
    path: 're-comment',
    module: RecommentModule,
  },
];
