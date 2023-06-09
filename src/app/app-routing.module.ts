import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HermanoComponent } from './hermano/hermano.component';
import { HijoComponent } from './hijo/hijo.component';
import { AdminGuard } from './guards/admin.guard';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { DataResolver } from './resolvers/data.resolver';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent,
    children: [
      { path: 'child', component: HijoComponent }
    ] },
  { path: '', loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule) },  
  { path: 'brother', component: HermanoComponent },
  { path: 'detail/:id', component: DetailComponent, canActivate: [AdminGuard], resolve: { data: DataResolver } },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
