import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { IngredientPageComponent } from './ingredient-page/ingredient-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { OrderFormComponent } from './order-form/order-form.component';



const routes: Routes = [
 {path: '', component: HomePageComponent},
 {path: 'about', component: AboutPageComponent},
 {path: 'menu', component: MenuPageComponent},
 {path: 'event', component: IngredientPageComponent},
 {path: 'contact', component: ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
