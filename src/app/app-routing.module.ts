import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AHomeComponent } from './a-home/a-home.component';
import { AGalleryComponent } from './a-gallery/a-gallery.component';
import { AFormNftComponent } from './a-form-nft/a-form-nft.component';
import { AProfilComponent } from './a-profil/a-profil.component';

const routes: Routes = [
  {path: '', component: AHomeComponent},
  {path: 'gallery', component: AGalleryComponent},
  {path: 'formNft', component: AFormNftComponent},
  {path: 'profil', component: AProfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
