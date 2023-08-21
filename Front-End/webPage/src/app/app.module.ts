import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { IngredientPageComponent } from './ingredient-page/ingredient-page.component';
import { BookPageComponent } from './book-page/book-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    AboutPageComponent,
    MenuPageComponent,
    IngredientPageComponent,
    BookPageComponent,
    ContactPageComponent,
    DashBoardComponent,
    CustomerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
