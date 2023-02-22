import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Patch,
  Param,
  Delete,
  UseGuards,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '@schema';
import { UserDecorator } from 'src/common/decorator';
import { JwtAuthGuard } from 'src/common/guard';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@ApiTags('Comment')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('access-token')
@ApiResponse({
  status: 401,
  description: 'Authorization Fail',
})
@Controller({
  version: '1',
})
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post(':idPost')
  async create(
    @UserDecorator() user: User,
    @Param('idPost') idPost: string,
    @Body() createCommentDto: CreateCommentDto,
    @Res() response,
  ) {
    const data = await this.commentService.create(
      createCommentDto,
      user,
      idPost,
    );
    return await response.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      description: 'SUCCESS',
      data,
    });
  }

  @Get(':idPost')
  async findAllCommentByPost(@Param('idPost') idPost: string, @Res() response) {
    const data = await this.commentService.findAllCommentByPost(idPost);
    return await response.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      description: 'SUCCESS',
      data,
    });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateCommentDto,
    @Res() response,
  ) {
    const data = await this.commentService.update(id, updateCommentDto);
    return await response.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      description: 'SUCCESS',
      data,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() response) {
    const data = await this.commentService.remove(id);
    return await response.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      description: 'SUCCESS',
      data,
    });
  }
}
