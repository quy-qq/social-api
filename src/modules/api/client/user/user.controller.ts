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
  @Get('me')
  async findOne(@Request() req, @Res() response) {
    console.log('Request:', req);
    const user = await this.userService.findOne(req.user._id);
    response.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      description: 'get user success',
      data: user,
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
  @Put('me')
  async update(
    @Body() updateUserDto: UpdateUserDto,
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
