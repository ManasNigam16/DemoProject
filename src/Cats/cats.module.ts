import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CatController } from './cats.controller';
import { CatsService } from './cats.service';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [],
  controllers: [CatController],
  providers: [CatsService],
})
export class CatsModule {}
