import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AddBookComponent } from '../add-book/add-book.component';
import { AddFlavourComponent } from '../add-flavour/add-flavour.component';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { BooksComponent } from '../books/books.component';
import { ChartsComponent } from '../charts/charts.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FlavoursComponent } from '../flavours/flavours.component';
import { NavComponent } from '../nav/nav.component';
import { OrdersComponent } from '../orders/orders.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { SelectedRecipesComponent } from '../selected-recipes/selected-recipes.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TransactionsComponent } from '../transactions/transactions.component';
import { UsersComponent } from '../users/users.component';
import { UsersRecipesComponent } from '../users-recipes/users-recipes.component';
import { AdminLoginComponent } from 'src/app/admin-login/admin-login.component';
import { NgxApexchartsModule } from 'ngx-apexcharts';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { ImageCropperModule } from 'ngx-image-cropper';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from '../edit-user/edit-user.component';

@NgModule({
  imports: [
    NgxApexchartsModule,
    // ... other imports
  ],
  // ... other module configurations
})
export class AppModule { }

console.warn("admin Module Loaded")

@NgModule({
  declarations: [
    AddBookComponent,
    AddFlavourComponent,
    AddRecipeComponent,
    AddUserComponent,
    BooksComponent,
    ChartsComponent,
    DashboardComponent,
    FlavoursComponent,
    NavComponent,
    OrdersComponent,
    RecipesComponent,
    SelectedRecipesComponent,
    SidebarComponent,
    TransactionsComponent,
    UsersComponent,
    UsersRecipesComponent,
    AdminLoginComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    HttpClientModule,
    NgxApexchartsModule,
    ImageCropperModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class AdminModuleModule { }
