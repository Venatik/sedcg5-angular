import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { GuestsComponent } from "./guests/guests.component";
import { NotFoundComponent } from "./not-found/not-found.component";

@Component({
  selector: "app-root",
  standalone: true,
  // No need to import anything other than RouterOutlet and HeaderComponent. We access them with routing.
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {}
