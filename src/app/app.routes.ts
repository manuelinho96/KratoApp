import { ComercioListComponent } from './comercio-list/comercio-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { AllCommerceComponent } from './all-commerce/all-commerce.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/all', pathMatch: 'full'},
    { path: 'comercios', component: ComercioListComponent },
    { path: 'all', component: AllCommerceComponent }
  ]

  export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);