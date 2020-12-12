import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from 'src/app/components/FirstComponent/firstcomponent.component';
import { AComponent } from 'src/app/components/a/a.component';
import { BComponent } from 'src/app/components/b/b.component';

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
  {
    path: 'first',
    component: FirstComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
