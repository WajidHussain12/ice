import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Services/Admin/admin.service';

@Component({
  selector: 'app-users-recipes',
  templateUrl: './users-recipes.component.html',
  styleUrls: ['./users-recipes.component.css']
})
export class UsersRecipesComponent implements OnInit{

  constructor(private requestService: AdminService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.requesrRepipesData();


  }


  image: any;
  Recipe_Name: any;
  Ingredients: any;
  Instructions: any;
  Cooking_Time: any;

  RecipeID: any;
  UserID: any;
  UserName: any;

  Calories: any;
  Rating: any;
  Status: any;




  showMore(id: any) {
    // console.log(id);
    this.requestService.getuserRecipeInstructionData(id).subscribe((data) => {
      var i: any = data;

      this.image = i['image'],
        this.Recipe_Name = i['Recipe_Name'],
        this.Ingredients = i['Ingredients'],
        this.Instructions = i['Instructions'],
        this.Cooking_Time = i['Cooking_Time'],
        this.RecipeID = i['id']
      this.UserID = i['Author_ID']
      this.UserName = i['Author_Name']
      this.Calories = i['Calories']
      this.Rating = i['Rating']
      this.Status = i['Status']

    });
  }


  inst: any



  RecipesData: any;
  r: any;

  requesrRepipesData() {
    this.requestService.getuserrecipesData().subscribe((data) => {
      this.RecipesData = data;
    });

  }



  // Delete
  RecipeId: number = 0;
  RecipeName: string = "";
  AuthorName: string = "";

  getDeleteId(id: number) {
    this.RecipeId = id;
    console.log(this.RecipeId)
    this.getDeleteUserName(this.RecipeId)
  }

  getDeleteUserName(Deleteid: number) {
    this.requestService.GetuserdeleteRecipe(Deleteid).subscribe((data) => {
      var d: any = data;
      this.RecipeName = d['Recipe_Name']
      this.AuthorName = d['Author_Name']
    });
  }


  DeleteRecipe(id: number) {
    this.requestService.DeleteuserRecipe(id).subscribe((data) => {
      console.log("Recipe Deleted", data)
      this.ngOnInit()
    });
  }

  ConfirmDelete() {
    this.DeleteRecipe(this.RecipeId);
    this.showerror();
  }

  showerror() {
    this.toastr.error('Recipe Deleted!');
  }

}
