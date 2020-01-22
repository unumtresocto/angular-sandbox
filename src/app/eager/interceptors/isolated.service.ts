import { Injectable } from "@angular/core";

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class IsolatedService implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    console.log("intercepted");

    return of(new HttpResponse({ body: "aaaa" }));
  }
}
