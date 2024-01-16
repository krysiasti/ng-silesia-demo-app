import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  PreloadAllModules,
  provideRouter,
  withDebugTracing,
  withPreloading,
} from '@angular/router';

import { AppComponent } from './app/app.component';

import { APP_ROUTES } from './app/app.routes';
import { SHARED_IMPORTS } from '@shared';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, ...SHARED_IMPORTS),
    provideHttpClient(),
    provideAnimations(),
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules), withDebugTracing()),
  ],
}).catch((err) => console.error(err));
