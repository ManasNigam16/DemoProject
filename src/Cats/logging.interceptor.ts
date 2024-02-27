import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

// Here interceptor works as a middleware  
@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    console.log('TIme stamp of before...');
    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`After ${Date.now() - now}ms`)));
  }
}
