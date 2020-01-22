import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { LazyIsolatedService } from "./lazy-isolated.service";

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LazyIsolatedService, multi: true }
];
