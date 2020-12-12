import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularTraining';

  getYearDate() {
    const date = new Date();
    return date.getFullYear();
  }

  catchEvent(event: any) {
    console.log(event);
  }
}
