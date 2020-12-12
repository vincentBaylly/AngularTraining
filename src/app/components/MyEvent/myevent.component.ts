import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './myevent.component.html',
})
export class MyEventComponent {
  @Output() clickOnButton: EventEmitter<string> = new EventEmitter();

  showClick() {
    //console.log('my click event was triggered');
    this.clickOnButton.emit('my click event was triggered');
  }
}
