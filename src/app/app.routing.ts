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
        path: 'bulk-import', loadChildren: () => import('../app/content/bulk-import/bulk-import.module').then(m => m.BulkImportModule),
        canActivate: [AuthGuard]
      },

    ],
  },
  // otherwise redirect to home
  { path: '**', redirectTo: 'dashboard' }
];

export const routing = RouterModule.forRoot(appRoutes, { scrollOffset: [0, 0], scrollPositionRestoration: 'top' });
