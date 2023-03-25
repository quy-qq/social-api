import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Put,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserService } from '../user/user.service';
import { UpdateUserDto } from './dto';
import { JwtAuthGuard } from 'src/common/guard';
import { FiltersDto } from './dto/filters.dto';
import { User } from '@schema';
import { UserDecorator } from 'src/common/decorator';
@ApiTags('User')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('access-token')
@ApiResponse({
  status: 401,
  description: 'Authorization Fail',
})
@Controller({
  version: '1',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   *
   * @param req
   * @param response
   */
  @ApiOperation({ summary: 'Get Information User' })
  @ApiOkResponse({ description: 'get data success' })
  @Get('/me')
  async findOne(@UserDecorator() user: User, @Res() response) {
    console.log('user-----:', user);
    const data = await this.userService.findOne(user._id);
    response.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      description: 'get user success',
      data: data,
    });
  }

  /**
   *
   * @param updateUserDto
   * @param req
   * @param response
   */
  @ApiOperation({ summary: 'Update Information Current User' })
  @ApiOkResponse({ description: 'update data success' })
rDto,
    @Request() req,
    @Res() response,
  ) {
    response.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      description: 'update success',
      data: await this.userService.update(req.user._id, updateUserDto),
    });
  }

  /**
   *
   * @param id
   */
  @ApiOperation({ summary: 'DeActive Current User' })
  @ApiOkResponse({ description: 'de active data success' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
