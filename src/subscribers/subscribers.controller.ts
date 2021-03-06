import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import JwtAuthenticationGuard from 'src/authentication/jwt-authentication.guard';
import CreateSubscriberDto from './dto/createSubscriber.dto';

@Controller('subscribers')
@UseInterceptors(ClassSerializerInterceptor)
export class SubscribersController {
  constructor(
    @Inject('SUBSCRIBERS_SERVICE') private subscribersService: ClientProxy,
  ) {}

  @Get()
  @UseGuards(JwtAuthenticationGuard)
  async getSubscribers() {
    return this.subscribersService.send(
      {
        cmd: 'get-all-subscribers',
      },
      '',
    );
  }

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  async createPost(@Body() subscriber: CreateSubscriberDto) {
    // return this.subscribersService.emit(
    //   {
    //     cmd: 'add-subscriber',
    //   },
    //   subscriber,
    // );
    return this.subscribersService.send(
      {
        cmd: 'add-subscriber',
      },
      subscriber,
    );
  }
}
