import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ComponentAComponent } from "./components/component-a/component-a.component";
import { ComponentBComponent } from "./components/component-b/component-b.component";
import { ComponentCComponent } from "./components/component-c/component-c.component";
import { MessageService } from "./services/message.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ComponentAComponent, ComponentBComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  componentATitle = "Component A";
  componentBTitle = "Component B";
  componentCTitle = "Component C";

  messageForB = "";

  onMessageFromAEmitted(message: string) {
    console.log("Read the message in App Component!", message);
    this.messageForB = message;
  }

  constructor(private readonly messageService: MessageService) {}

  ngOnInit() {
    // We SUBSCRIBE to the value that is emitted from the person EventEmitter
    this.messageService.person.subscribe(data => {
      console.log("Person data in App Component", data);
    });
  }
}
