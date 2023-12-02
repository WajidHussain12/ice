import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private request: HttpClient) { }

  userApi: string = "http://localhost:3000/Users";
  orderApi: string = "http://localhost:3000/orders";
  recipesApi: string = " http://localhost:3000/Recipes";
  flavourApi: string = "http://localhost:3000/flavours";
  booksApi: string = "http://localhost:3000/books";
  usersRecipesApi: string = " http://localhost:3000/usersRecipes";


  // User Methods

  getUsersData() {
    return this.request.get(this.userApi);
  }

  addUser(data: any) {
    return this.request.post(this.userApi, data);
  }

  getEditUserData(id: any) {
    return this.request.get(`${this.userApi}/${id}`)
  }

  UpdataUser(id: any, data: any) {
    return this.request.put(`${this.userApi}/${id}`, data)

  }

  // GetdeleteUsername

  GetdeleteUsername(id: number) {
    return this.request.get(`${this.userApi}/${id}`)
  }

  DeleteUser(Did: number) {
    return this.request.delete(`${this.userApi}/${Did}`);
  }



  // Order Methods

  getOrdersData() {
    return this.request.get(this.orderApi);
  }



  // Recipes Methods

  getrecipesData() {
    return this.request.get(this.recipesApi);
  }

  // This Method Use For Show More Button On Recipe Cards

  getRecipeInstructionData(id: any) {
    return this.request.get(`${this.recipesApi}/${id}`)
  }

  GetdeleteRecipe(id: number) {
    return this.request.get(`${this.recipesApi}/${id}`)
  }
  DeleteRecipe(Did: number) {
    return this.request.delete(`${this.recipesApi}/${Did}`);
  }

  addRecipe(data: any) {
    return this.request.post(this.recipesApi, data)
  }

  getEditRecipeData(id: number) {
    return this.request.get(`${this.recipesApi}/${id}`)
  }

  updateRecipe(id: any, data: any) {
    return this.request.put(`${this.recipesApi}/${id}`, data)
  }

  // User Recipes Methods
  getuserrecipesData() {
    return this.request.get(this.usersRecipesApi);
  }
  getuserRecipeInstructionData(id: any) {
    return this.request.get(`${this.usersRecipesApi}/${id}`)
  }

  GetuserdeleteRecipe(id: number) {
    return this.request.get(`${this.usersRecipesApi}/${id}`)
  }
  DeleteuserRecipe(Did: number) {
    return this.request.delete(`${this.usersRecipesApi}/${Did}`);
  }



  // Flavour Methods

  getFlavoursData() {
    return this.request.get(this.flavourApi)
  }
  DeleteFlavour(Did: number) {
    return this.request.delete(`${this.flavourApi}/${Did}`);
  }

  GetdeleteFlavourname(id: number) {
    return this.request.get(`${this.flavourApi}/${id}`)
  }


  // Books Methods

  getbookssData() {
    return this.request.get(this.booksApi)
  }
  Deletebook(Did: number) {
    return this.request.delete(`${this.booksApi}/${Did}`);
  }

  Getdeletebookname(id: number) {
    return this.request.get(`${this.booksApi}/${id}`)
  }

}
