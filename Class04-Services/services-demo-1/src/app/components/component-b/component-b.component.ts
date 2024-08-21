import { Component, input } from "@angular/core";
import { MessageService } from "../../services/message.service";

@Component({
  selector: "app-component-b",
  standalone: true,
  imports: [],
  templateUrl: "./component-b.component.html",
  styleUrl: "./component-b.component.css",
})
export class ComponentBComponent {
  title = input.required<string>();

  message = input.required<string>();

  messageFromService = "";
  constructor(private readonly messageService: MessageService) {}

  ngOnInit() {
    console.log("NG ON INIT");

    this.messageService.message.subscribe(value => {
      console.log("The message in Component B from Service:", value);

      this.messageFromService = value;
    });

    this.messageService.person.subscribe(value => {
      console.log(value);
    });
  }
}
