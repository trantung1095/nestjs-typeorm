import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import recursivelyStripNullValues from './recursivelyStripNullValues';

@Injectable()
export class ExcludeNullInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // ExecutionContext it provides information about the current context,
    // CallHandler it contains the  handle method that invokes the route handler and returns an RxJS Observable
    return next
      .handle()
      .pipe(map((value) => recursivelyStripNullValues(value)));
  }
}
