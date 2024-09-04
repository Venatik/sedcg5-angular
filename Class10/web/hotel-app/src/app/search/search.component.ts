import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-search",
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.css",
})
export class SearchComponent {
  searchTerm = "";
}
