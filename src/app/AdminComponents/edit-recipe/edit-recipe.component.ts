import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Services/Admin/admin.service';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent {

  constructor(private requestService: AdminService, public formBuilder: FormBuilder, private toastr: ToastrService, private route: Router, private ActivatedRoute: ActivatedRoute) { }
  selectedFile: any
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(): void {
    this.getEditRecipeData()
  }

  recipeForm = this.formBuilder.group({
    Recipe_Name: [''],
    Cooking_Time: [''],
    Ingredients: [''],
    Instructions: [''],
    Calories: [''],
    image: [''],

    Author_ID: [''],
    Author_Name: [''],
    Status: ['']
  });

  RecipeId: number

  save() {
    var formData = this.recipeForm.value;

    if (this.selectedFile) {
      this.uploadImage(this.selectedFile).subscribe((filePath: string) => {
        formData.image = filePath;
        this.updateRecipe(formData);
      });
    } else {
      formData.image = this.ResponseDatabaseImgae[0];
      this.updateRecipe(formData);
    }
  }

  private updateRecipe(formData: any) {
      this.requestService.updateRecipe(this.RecipeId, formData).subscribe(() => {
      this.toastr.warning("Recipe Edited");
      this.route.navigate(["admin/recipes"]);
    });
  }

  private uploadImage(file: File): Observable<string> {
    return of(file.name);
  }


  ResponseDatabaseImgae: any

  getEditRecipeData() {
    this.ActivatedRoute.params.subscribe((data) => {

      var d: any = data
      var RecipeId: number = d['id']
      this.RecipeId = RecipeId

      this.requestService.getEditRecipeData(RecipeId).subscribe((data: any) => {
        this.ResponseDatabaseImgae = [data['image']]

        this.recipeForm = this.formBuilder.group({
          Recipe_Name: [data['Recipe_Name'], [Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*')]],
          Cooking_Time: [data['Cooking_Time'], [Validators.required, Validators.minLength(6), Validators.maxLength(40),Validators.pattern('[a-zA-Z0-9 ]*')]],
          Ingredients: [data['Ingredients'], [Validators.required, Validators.minLength(20)]],
          Instructions: [data['Instructions'], [Validators.required, Validators.minLength(30)]],
          Calories: [data['Calories'], [Validators.required, Validators.minLength(4), Validators.maxLength(40), Validators.pattern('[a-zA-Z0-9 -]*')]],
          image: [data[""]],

          Author_ID: [data['Author_ID']],
          Author_Name: [data['Author_Name']],
          Status: [data['Status']]

        });
      });

    })
  }

}
