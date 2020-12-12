import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// un tableau contenant nos routes!
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
