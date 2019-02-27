import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AboutComponent } from './about/about.component';
import { MembersComponent } from './members/members.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    
    FooterComponent,
    MainComponent,
    SideNavComponent,
    AboutComponent,
    MembersComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:LoginComponent
      },
      {
        path:'mainpage',
        component:MainComponent
      },
      
      {
        path:'aboutpage',
        component:AboutComponent
      },
      {
        path:'homepage',
        component:HomeComponent
      },
      {
        path:'members',
        component:MembersComponent
      }
     
    ])


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
