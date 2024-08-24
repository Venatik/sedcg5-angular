import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ObservablesComponent } from "./components/observables/observables.component";
import { HeaderComponent } from "./components/header/header.component";
import { NavigationComponent } from "./components/navigation/navigation.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    ObservablesComponent,
    HeaderComponent,
    NavigationComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "ticket-management";
}
