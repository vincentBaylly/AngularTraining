import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './myevent.component.html',
})
export class MyEventComponent {
  navchange: EventEmitter<number> = new EventEmitter();

  showClick() {
    console.log('my click event was triggered');
  }
}
