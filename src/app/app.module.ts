import { NgModule,APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './AdminComponents/add-book/add-book.component';
import { AddFlavourComponent } from './AdminComponents/add-flavour/add-flavour.component';
import { AddRecipeComponent } from './AdminComponents/add-recipe/add-recipe.component';
import { AddUserComponent } from './AdminComponents/add-user/add-user.component';
import { BooksComponent } from './AdminComponents/books/books.component';
import { ChartsComponent } from './AdminComponents/charts/charts.component';
import { DashboardComponent } from './AdminComponents/dashboard/dashboard.component';

import { FlavoursComponent } from './AdminComponents/flavours/flavours.component';
import { NavComponent } from './AdminComponents/nav/nav.component';
import { OrdersComponent } from './AdminComponents/orders/orders.component';
import { RecipesComponent } from './AdminComponents/recipes/recipes.component';
import { SelectedRecipesComponent } from './AdminComponents/selected-recipes/selected-recipes.component';
import { SidebarComponent } from './AdminComponents/sidebar/sidebar.component';
import { TransactionsComponent } from './AdminComponents/transactions/transactions.component';
import { UsersComponent } from './AdminComponents/users/users.component';
import { UsersRecipesComponent } from './AdminComponents/users-recipes/users-recipes.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from './Services/Admin/admin.service';
import { AdminLoginService } from './Services/AdminLogin/admin-login.service';
import { DynamicScriptService } from './Services/DynamicScript/dynamic-script.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageCropperModule } from 'ngx-image-cropper';


import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      // preventDuplicates: true,
      progressAnimation:'decreasing',
      progressBar:true,
      newestOnTop:true,
      closeButton:true
      // easing:'string'
    }),

    CommonModule,
    ImageCropperModule


  ],
  providers: [
    AdminService,
    AdminLoginService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function initializeApp() {
  return () => {
    // Your initialization code here
    console.log('Application initialized');
  }};
