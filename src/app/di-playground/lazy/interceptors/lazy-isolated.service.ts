import { Injectable } from "@angular/core";

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable()
export class LazyIsolatedService implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    console.log("lazy-intercepted");

    return of(new HttpResponse({ body: "lazy-aaaaa" }));
  }
}
