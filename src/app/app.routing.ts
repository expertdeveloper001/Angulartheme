import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutComponent } from './_layout/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './_layout/private-layout/private-layout.component';
import { AuthGuard } from './_guards/auth.guard';
import { RegisterComponent } from './register';
import { LoginComponent } from './login';
import { ChangelogComponent } from './changelog/changelog.component';
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
      { path: 'changelog', component: ChangelogComponent, canActivate: [AuthGuard] },
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
      },
	  {
        path: 'components', loadChildren: () => import('../app/content/ngbbootstrap/components.module').then(m => m.ComponentsModule),
        canActivate: [AuthGuard]
      },
      { path: 'todos', loadChildren: () => import('../app/content/applications/todos/todos.module').then(m => m.TodosModule),
       canActivate: [AuthGuard] },
      { path: 'chats', loadChildren: () => import('../app/content/applications/chat/chats.module').then(m => m.ChatsModule),
       canActivate: [AuthGuard] },
      { path: 'email', loadChildren: () => import('../app/content/applications/email/email.module').then(m => m.EmailModule),
       canActivate: [AuthGuard] },
      {
        path: 'calender', loadChildren: () => import('../app/content/applications/calender/calender.module').then(m => m.CalenderModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'contacts', loadChildren: () => import('../app/content/applications/contacts/contacts.module').then(m => m.ContactsModule),
        canActivate: [AuthGuard]
      },
      { path: 'chartjs', loadChildren: () => import('../app/content/charts-maps/chartjs/chartjs.module').then(m => m.ChartjsModule),
       canActivate: [AuthGuard] },
      {
        path: 'form-elements', loadChildren: () => import('../app/content/forms/form-elements/form-elements.module')
        .then(m => m.FormElementsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'form-layouts', loadChildren: () => import('../app/content/forms/form-layouts/form-layouts.module')
        .then(m => m.FormLayoutsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'form-wizard', loadChildren: () => import('../app/content/forms/form-wizard/form-wizard.module')
        .then(m => m.FormWizardModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'form-repeater', loadChildren: () => import('../app/content/forms/form-repeater/form-repeater.module')
        .then(m => m.FormRepeaterModule),
        canActivate: [AuthGuard]
      },
      { path: 'content', loadChildren: () => import('../app/content/ui-content/ui-content.module').then(m => m.UIContentModule),
        canActivate: [AuthGuard] },
      {
        path: 'ngchartist', loadChildren: () => import('../app/content/charts-maps/ngchartist/ngchartist.module')
        .then(m => m.NgchartistModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'boostraptables', loadChildren: () => import('../app/content/table/boostraptables/boostraptables.module')
        .then(m => m.BoostraptablesModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'datatables', loadChildren: () => import('../app/content/table/datatables/datatables.module').then(m => m.DatatablesModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'datatablesext', loadChildren: () => import('../app/content/table/datatablesext/datatablesext.module')
        .then(m => m.DatatablesextModule),
        canActivate: [AuthGuard]
      },
      { path: 'icons', loadChildren: () => import('../app/content/icons/icons.module').then(m => m.IconsModule), canActivate: [AuthGuard] },
      { path: 'cards', loadChildren: () => import('../app/content/cards/cards.module').then(m => m.CardsModule), canActivate: [AuthGuard] },
      { path: 'maps', loadChildren: () => import('../app/content/maps/maps.module').then(m => m.MapsModule), canActivate: [AuthGuard] },
      { path: 'invoice', loadChildren: () => import('../app/content/pages/invoice/invoice.module').then(m => m.InvoiceModule),
       canActivate: [AuthGuard] },
      {
        path: 'timelines', loadChildren: () => import('../app/content/pages/timelines/timelines.module').then(m => m.TimelinesModule),
        canActivate: [AuthGuard]
      },
      { path: 'user', loadChildren: () => import('../app/content/pages/user/user.module').then(m => m.UserModule),
       canActivate: [AuthGuard] },
      { path: 'gallery', loadChildren: () => import('../app/content/pages/gallery/gallery.module').then(m => m.GalleryModule),
       canActivate: [AuthGuard] },
      { path: 'news-feed', loadChildren: () => import('../app/content/pages/news-feed/news-feed.module').then(m => m.NewsFeedModule),
       canActivate: [AuthGuard] },
      {
        path: 'social-feed', loadChildren: () => import('../app/content/pages/social-feed/social-feed.module')
        .then(m => m.SocialFeedModule),
        canActivate: [AuthGuard]
      },
      { path: 'search', loadChildren: () => import('../app/content/pages/search/search.module').then(m => m.SearchModule),
       canActivate: [AuthGuard] },
      {
        path: 'advanceCards', loadChildren: () => import('../app/content/advance-cards/advance-cards.module')
        .then(m => m.AdvanceCardsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'extraComponents', loadChildren: () => import('../app/content/extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
        canActivate: [AuthGuard]
      },
    ],
  },
  // otherwise redirect to home
  { path: '**', redirectTo: 'dashboard/sales' }
];

export const routing = RouterModule.forRoot(appRoutes, { scrollOffset: [0, 0], scrollPositionRestoration: 'top' });
