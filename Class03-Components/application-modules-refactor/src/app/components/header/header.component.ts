import { Component } from "@angular/core"; // Angular only has CLASS components
import { NavigationComponent } from "../navigation/navigation.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
  standalone: true,
  imports: [NavigationComponent],
})
export class HeaderComponent {}
