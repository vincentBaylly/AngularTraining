import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/FirstComponent/firstcomponent.component';
import { MyEventComponent } from './components/MyEvent/myevent.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, MyEventComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
