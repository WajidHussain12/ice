import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UsersComponent } from '../users/users.component';
import { OrdersComponent } from '../orders/orders.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { FlavoursComponent } from '../flavours/flavours.component';
import { BooksComponent } from '../books/books.component';
import { UsersRecipesComponent } from '../users-recipes/users-recipes.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';
import { AddFlavourComponent } from '../add-flavour/add-flavour.component';
import { AddBookComponent } from '../add-book/add-book.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { SelectedRecipesComponent } from '../selected-recipes/selected-recipes.component';
import { EditRecipeComponent } from '../edit-recipe/edit-recipe.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "users", component: UsersComponent },
  { path: "order", component: OrdersComponent },
  { path: "recipes", component: RecipesComponent },
  { path: "flavour", component: FlavoursComponent },
  { path: "books", component: BooksComponent },
  { path: "usersrecipies", component: UsersRecipesComponent },
  { path: "selectedrecipies", component: SelectedRecipesComponent },
  // AddRoutes
  { path: "adduser", component: AddUserComponent },
  { path: "addrecipe", component: AddRecipeComponent },
  { path: "addflavour", component: AddFlavourComponent },
  { path: "addbook", component: AddBookComponent },
  // EditRoutes
  { path: "edituser/:id", component: EditUserComponent },
  { path: "editrecipe/:id", component: EditRecipeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
