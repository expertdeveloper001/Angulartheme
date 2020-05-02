import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutComponent } from './_layout/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './_layout/private-layout/private-layout.component';
import { AuthGuard } from './_guards/auth.guard';
import { RegisterComponent } from './register';
import { LoginComponent } from './login';
import { FullLayoutComponent } from './_layout/full-layout/full-layout.component';

const appRoutes: Routes = [
  // Public layout
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: '', component: LoginComponent }
    ]
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      { path: 'error', loadChildren: () => import('../app/content/full-pages/error/error.module').then(m => m.ErrorModule),
       canActivate: [AuthGuard] },
      {
        path: 'authentication', loadChildren: () => import('../app/content/full-pages/authentication/authentication.module')
        .then(m => m.AuthenticationModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'others', loadChildren: () => import('../app/content/full-pages/others/others.module').then(m => m.OthersModule),
        canActivate: [AuthGuard]
      },
    ]
  },
  // Private layout
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      { path: 'logout', component: LoginComponent, canActivate: [AuthGuard] },
      { path: 'dashboard', loadChildren: () => import('../app/content/dashboard/dashboard.module').then(m => m.DashboardModule),
       canActivate: [AuthGuard] },
	  {
        path: 'users', loadChildren: () => import('../app/content/users/users.module').then(m => m.UsersModule),
        canActivate: [AuthGuard]
      },
	  {
        path: 'products', loadChildren: () => import('../app/content/products/products.module').then(m => m.ProductsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'bulk', loadChildren: () => import('../app/content/bulkimport/bulkimport.module').then(m => m.BulkimportModule),
      }
    ],
  },
  // otherwise redirect to home
  { path: '**', redirectTo: 'dashboard/sales' }
];

export const routing = RouterModule.forRoot(appRoutes, { scrollOffset: [0, 0], scrollPositionRestoration: 'top' });
