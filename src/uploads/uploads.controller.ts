import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as AWS from 'aws-sdk';

const BUCKET_NAME = 'nomad-coder-nubereats888'; // 버켓이름이 중복될 시 생성 안됨

@Controller('uploads')
export class UploadsController {
  @Post('')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    AWS.config.update({
      credentials: {
        accessKeyId: process.env.AMZON_ACCESS_KEY,
        secretAccessKey: process.env.AMZON_SECRET_KEY,
      },
    });
    try {
      const objectName = `${Date.now() + file.originalname}`;
      //초기 한번만 실행
      // const createBucket = await new AWS.S3()
      //   .createBucket({
      //     Bucket: BUCKET_NAME,
      //   })
      //   .promise();
      // console.log(createBucket);
      await new AWS.S3()
        .putObject({
          Body: file.buffer,
          Bucket: BUCKET_NAME,
          Key: objectName,
          ACL: 'public-read',
        })
        .promise();
      const url = `https://${BUCKET_NAME}.s3.amazonaws.com/${objectName}`;
      return { url };
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}
