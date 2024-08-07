import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-single-recipe",
  standalone: true,
  imports: [CommonModule], // ONLY FOR DIRECTIVES => *ngIf
  templateUrl: "./single-recipe.component.html",
  styleUrl: "./single-recipe.component.css",
})
export class SingleRecipeComponent {
  // @Input means that this component will accept a prop named "title" from its parent
  // by default it is not required
  @Input() title: string = "";

  @Input({ required: true }) description: string = "";

  @Input({ required: true }) foodHasAllergens: boolean = false;
}
