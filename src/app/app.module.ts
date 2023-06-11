import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HermanoComponent } from './hermano/hermano.component';
import { AdminComponent } from './admin/admin.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { DataPipe } from './pipes/data.pipe';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DataInterceptor } from './interceptors/data.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    HermanoComponent,
    AdminComponent,
    DetailComponent,
    HomeComponent,
    DataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: DataInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
