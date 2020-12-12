import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from '../../components/a/a.component';
import { BComponent } from '../../components/b/b.component';

// un tableau contenant nos routes!
const routes: Routes = [
  {
    path: 'A',
    component: AComponent,
  },
  {
    path: 'B',
    component: BComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
