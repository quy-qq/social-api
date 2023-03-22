import {
  UserModule,
  PostModule,
  LikeModule,
  CommentModule,
  ChattingModule,
  UploadModule,
  ConversationModule,
  AuthenticationModule,
  RecommentModule,
} from 'src/modules/api/client';

export const ClientRouteApi = [
  {
    path: 'authentication',
    module: AuthenticationModule,
  },
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
  {
    path: 'conversation',
    module: ConversationModule,
  },
];
