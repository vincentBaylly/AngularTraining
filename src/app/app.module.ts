import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/FirstComponent/firstcomponent.component';
import { MyEventComponent } from './components/MyEvent/myevent.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DefaultImgPipe } from './pipes/defaultimg.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    MyEventComponent,
    HighlightDirective,
    DefaultImgPipe,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
