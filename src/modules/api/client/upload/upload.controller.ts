import {
  Controller,
  HttpStatus,
  Post,
  Res,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { imageFileFilter } from '../../../../common/filters/image-upload.filter';
import {
  SharpPipeImage,
  SharpPipeImages,
} from '../../../../common/pipes/sharp.pipe';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guard';

@ApiTags('File Uploads')
@UseGuards(JwtAuthGuard)
@Controller({
  version: '1',
})
@ApiResponse({
  status: 401,
  description: 'Authorization Fail',
})
@ApiBearerAuth()
export class UploadController {
  /**
   *
   * @param file
   * @param response
   */
  @ApiOperation({ summary: 'Upload Single Image' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          description: 'Image',
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiConsumes('multipart/form-data')
  @Post('single-image')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: imageFileFilter,
    }),
  )
  async uploadSingleImage(
    @UploadedFile(SharpPipeImage) file: Express.Multer.File,
    @Res() response,
  ) {
    return response.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      description: 'image is successfully created',
      data: file,
    });
  }

  /**
   *
   * @param files
   * @param response
   */
  @ApiOperation({ summary: 'Upload Multiple Image' })
  @Post('multiple-image')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        files: {
          description: 'Image',
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    },
  })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FilesInterceptor('file', 6, {
      fileFilter: imageFileFilter,
    }),
  )
  async uploadMultipleImage(
    @UploadedFiles(SharpPipeImages) files: Express.Multer.File,
    @Res() response,
  ) {
    return response.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      description: 'image is successfully created',
      data: files,
    });
  }
}
