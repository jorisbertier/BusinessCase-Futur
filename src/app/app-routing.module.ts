import { NgModule } from '@angular/core';
import { authGuard } from './auth/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { AHomeComponent } from './a-home/a-home.component';
import { AGalleryComponent } from './a-gallery/a-gallery.component';
import { AFormNftComponent } from './a-form-nft/a-form-nft.component';
import { AProfilComponent } from './a-profil/a-profil.component';
import { ANftDetailsComponent } from './a-nft-details/a-nft-details.component';
import { ARegisterComponent } from './a-register/a-register.component';
import { ABasketComponent } from './a-basket/a-basket.component';
import { AFavorisComponent } from './a-favoris/a-favoris.component';
import { ALoginComponent } from './a-login/a-login.component';
import { ACollectionComponent } from './a-collection/a-collection.component';

const routes: Routes = [
  {path: '', component: AHomeComponent},
  {path: 'gallery', component: AGalleryComponent, canActivate:[authGuard]},
  {path: 'gallery/:id', component: ANftDetailsComponent, canActivate:[authGuard]},
  {path: 'formNft', component: AFormNftComponent, canActivate:[authGuard]},
  {path: 'profil/:id', component: AProfilComponent, canActivate:[authGuard]},
  {path: 'register', component: ARegisterComponent},
  {path: 'cart', component: ABasketComponent, canActivate:[authGuard]},
  {path: 'favoris', component: AFavorisComponent, canActivate:[authGuard]},
  {path: 'login', component: ALoginComponent},
  {path: 'collection', component: ACollectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
