import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HermanoComponent } from './hermano/hermano.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppComponent },
  { path: 'brother', component: HermanoComponent },
  { path: 'detail/:id', component: AppComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
