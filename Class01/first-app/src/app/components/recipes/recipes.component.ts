import { Component } from "@angular/core";
import { SingleRecipeComponent } from "../single-recipe/single-recipe.component";
import { Recipe } from "../../types/recipe.interface";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-recipes",
  standalone: true,
  imports: [SingleRecipeComponent, CommonModule], // Common module is needed for the directive ngFor also
  templateUrl: "./recipes.component.html",
  styleUrl: "./recipes.component.css",
})
export class RecipesComponent {
  recipes: Recipe[] = [
    {
      id: "1",
      name: "Banana Smoothie",
      description: "Delicious smoothie for breakfast",
      hasAllergens: true,
    },
    {
      id: "2",
      name: "Jufke",
      description: "Najbolja jufka",
      hasAllergens: false,
    },
  ];
}
