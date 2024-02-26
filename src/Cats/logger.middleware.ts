import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: NextFunction) {
    console.log(
      'Implemented middleware function here : only if user deleted the cat object ',
    );
    next();
  }
}
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Functional middleware');
}
