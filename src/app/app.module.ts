import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './app-events.component';

@NgModule({
  imports: [
    // add the module here. Importing a module will make it available to the app.
    // all of its exported declarations and providers will be available to the app.
    BrowserModule
  ],
  declarations: [
    // add the component, directive, pipe here
    EventsAppComponent
  ],
  providers: [
    // add the service here
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
