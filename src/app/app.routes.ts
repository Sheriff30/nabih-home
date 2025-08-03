import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Support } from './pages/support/support';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { PageNotFound } from './pages/page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'support', component: Support },
  { path: 'privacy-policy', component: PrivacyPolicy },
  { path: '**', component: PageNotFound },
];
