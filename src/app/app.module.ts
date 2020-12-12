import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/FirstComponent/firstcomponent.component';
import { MyEventComponent } from './components/MyEvent/myevent.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DefaultImgPipe } from './pipes/defaultimg.pipe';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    MyEventComponent,
    HighlightDirective,
    DefaultImgPipe,
    AComponent,
    BComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // routing feature module
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
