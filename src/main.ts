/// <reference types="@angular/localize" />
import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import routeConfig from './app/services/app-routing.module';

import { AppComponent } from './app/components/app.component';

bootstrapApplication(AppComponent,
  {
    providers: [
      provideProtractorTestingSupport(),
      provideRouter(routeConfig)
    ]
  }
).catch(err => console.error(err));