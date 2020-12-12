import { Component } from '@angular/core';

//Configuration du composant
@Component({
  selector: 'app-first', //nom pour utiliser le composant dans votre html
  templateUrl: './firstcomponent.component.html', // emplacement du fichier de gabarit html du composant
})
export class FirstComponent {
  public showRandomly(bias: number) {
    return Math.random() < bias;
  }
}
