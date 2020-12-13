import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UsersService } from 'src/app/services/users.service';

//Configuration du composant
@Component({
  selector: 'app-first', //nom pour utiliser le composant dans votre html
  templateUrl: './firstcomponent.component.html', // emplacement du fichier de gabarit html du composant
})
export class FirstComponent implements OnInit {
  today = new Date();
  imageUrl = '';
  users: User[] = [];
  products = [
    {
      id: 1,
      name: 'Licensed Frozen Hat',
      description: 'Incidunt et magni',
      price: '170.00',
      quantity: 56840,
    },
    {
      id: 2,
      name: 'Rustic Concrete Chicken',
      description: 'Sint libero mollitia',
      price: '302.00',
      quantity: 9358,
    },
    {
      id: 3,
      name: 'Fantastic Metal Computer',
      description: 'In consequuntur cupiditat',
      price: '279.00',
      quantity: 90316,
    },
    {
      id: 4,
      name: 'Refined Concrete Chair',
      description: 'Saepe nemo praesentium',
      price: '760.00',
      quantity: 5899,
    },
  ];

  // public showRandomly(bias: number) {
  //   return Math.random() < bias;
  // }

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  catchEvent(event: any) {
    console.log(event);
  }
}
