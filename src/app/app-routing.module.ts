import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './_models/home/home/home.component';
import { LoginComponent } from './_models/login/login/login.component';
import { LogoutComponent } from './_models/logout/logout/logout.component';
import { UserComponent } from './_models/user/user.component';
import { AuthGuardService } from './_service/authguard/auth-guard.service';

const routes: Routes = [
  { path: 'admin/users', component:UserComponent, canActivate:[AuthGuardService] },
  { path: '', component:HomeComponent},
  { path: 'login', component:LoginComponent},
  { path: 'logout', component:LogoutComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
