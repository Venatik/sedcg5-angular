import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-personal-details",
  standalone: true,

  //   template: "<h3>This is personal details</h3>", // This is good for short html templates

  templateUrl: "./personal-details.component.html",
  imports: [FormsModule], // Used for two way data binding (for now)
})
export class PersonalDetails {
  firstName = "John";
  lastName = "Doe";
  age = 34;

  isInputDisabled = false;
  placeholderValue = this.isInputDisabled
    ? "Input is disabled"
    : "Input is enabled";

  address = "";
  movieName = "Harry Potter";

  onHandleClick() {
    console.log("button is clicked");

    this.isInputDisabled = !this.isInputDisabled;
  }

  onHandleAddressChange(event: any) {
    const inputValue = event.target.value;
    // console.log(event);
    console.log(inputValue);

    this.address = inputValue;
  }

  changeMovieNameProgrammatically() {
    this.movieName = "The Lord of the Rings";
  }
}
