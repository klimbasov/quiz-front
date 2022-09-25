import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './_models/user/user.component';
import { LoginComponent } from './_models/login/login/login.component';
import { LogoutComponent } from './_models/logout/logout/logout.component';
import { HeaderComponent } from './_models/header/header/header.component';
import { FooterComponent } from './_models/footer/footer/footer.component';
import { BasicAuthHttpInterseptorService } from './_service/authinterseptor/basic-auth-http-interseptor.service';
import { HomeComponent } from './_models/home/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    UserComponent,
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterseptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
