import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from 'src/app/client/client.component';
import { HomeComponent } from 'src/app/home/home.component';
import { LoginComponent } from 'src/app/login/login.component';
import { AuthGuard } from 'src/app/security/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'client', component: ClientComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
