import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AHomeComponent } from './a-home/a-home.component';

const routes: Routes = [
  {path: '', component: AHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
