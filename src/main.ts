/// <reference types="@angular/localize" />
import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import routeConfig from './app/app-routing.module';
import 'zone.js/dist/zone';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent,
  {
    providers: [
      provideProtractorTestingSupport(),
      provideRouter(routeConfig)
    ]
  }
).catch(err => console.error(err));