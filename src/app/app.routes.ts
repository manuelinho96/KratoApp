import { ComercioListComponent } from './comercio-list/comercio-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { AllCommerceComponent } from './all-commerce/all-commerce.component';
import { ComercioDetailComponent } from './comercio-detail/comercio-detail.component';
import { SectorCommerceComponent } from './sector-commerce/sector-commerce.component';
import { SearchComponent } from './search/search.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/all', pathMatch: 'full'},
    { path: 'comercios', component: ComercioListComponent },
    { path: 'all', component: AllCommerceComponent },
    { path: 'comercio-details/:nombre', component: ComercioDetailComponent },
    { path: 'sector-commerce/:nombre', component: SectorCommerceComponent },
    { path: 'search/:param', component: SearchComponent }
  ]

  export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);