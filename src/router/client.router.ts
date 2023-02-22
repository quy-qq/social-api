import {
  UserModule,
  PostModule,
  LikeModule,
  CommentModule,
  ChattingModule,
} from 'src/modules/api/client';

export const ClientRouteApi = [
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
];
