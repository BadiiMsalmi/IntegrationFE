import { GuarduserGuard } from './views/guards/guarduser.guard';
import { GuardadminGuard } from './views/guards/guardadmin.guard';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminLayoutComponent } from './layouts/auth-admin-layout/auth-admin-layout.component';
import { NoguarduserGuard } from './views/guards/noguarduser.guard';

const routes: Routes = [
  {
    path: '', component: FrontLayoutComponent, children: [
      { path: '', loadChildren: () => import('./views/front/home/home.module').then(m => m.HomeModule) },
      { path: 'login', loadChildren: () => import('./views/front/loginuser/loginuser.module').then(m => m.LoginuserModule),canActivateChild:[NoguarduserGuard] },
      { path: 'register', loadChildren: () => import('./views/front/register/register.module').then(m => m.RegisterModule) ,canActivateChild:[NoguarduserGuard]},
      { path: 'profil', loadChildren: () => import('./views/front/profil/profil.module').then(m => m.ProfilModule),canActivateChild:[GuarduserGuard] },
      { path: 'products', loadChildren: () => import('./views/front/products/products.module').then(m => m.ProductsModule) ,canActivateChild:[GuarduserGuard] },
      { path: 'productdetails/:id', loadChildren: () => import('./views/front/product-details/product-details.module').then(m => m.ProductDetailsModule),canActivateChild:[GuarduserGuard]  },
      { path: 'contact', loadChildren: () => import('./views/front/contact/contact.module').then(m => m.ContactModule) },
      { path: 'about', loadChildren: () => import('./views/front/about/about.module').then(m => m.AboutModule) }
    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, canActivate: [GuardadminGuard], children: [
      { path: '', loadChildren: () => import('./views/admin/dashboard/dashboard.module').then(m => m.DashboardModule)},
      { path: 'allusers', loadChildren: () => import('./views/admin/users/users.module').then(m => m.UsersModule) },
      { path: 'userdetails/:id', loadChildren: () => import('./views/admin/user-details/user-details.module').then(m => m.UserDetailsModule) },
      { path: 'allproducts', loadChildren: () => import('./views/admin/products/products.module').then(m => m.ProductsModule) },
      { path: 'productdetails/:id', loadChildren: () => import('./views/admin/product-details/product-details.module').then(m => m.ProductDetailsModule) },
      { path: 'dashboard', loadChildren: () => import('./views/admin/dashboard/dashboard.module').then(m => m.DashboardModule) }
    ]
  },
  { path: 'admin/login', component: AuthAdminLayoutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
