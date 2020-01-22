import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { IsolatedService } from "./isolated.service";

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: IsolatedService, multi: true }
];
