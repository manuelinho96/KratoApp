import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ComercioListComponent } from './comercio-list/comercio-list.component';
import { ComercioComponent } from './comercio-list/comercio.component';
import { routes } from './app.routes'
import { ComercioService } from './services/comercio.service';
import { AllCommerceComponent } from './all-commerce/all-commerce.component';
import { ComercioDetailComponent } from './comercio-detail/comercio-detail.component'
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ComercioListComponent,
    ComercioComponent,
    AllCommerceComponent,
    ComercioDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    routes,
    HttpModule
  ],
  providers: [ComercioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
