import { Component } from "@angular/core";
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-reactive",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./reactive.component.html",
  styleUrl: "./reactive.component.css",
})
export class ReactiveComponent {
  applicationForm!: FormGroup;

  ngOnInit() {
    this.applicationForm = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      phoneNumber: new FormControl(""),
      email: new FormControl("", [Validators.required, Validators.email]),
      coverLetter: new FormControl(""),

      pastExperience: new FormArray([]),
    });
  }

  onHandleSubmit() {
    console.log(this.applicationForm);

    const isFormInvalid = this.applicationForm.invalid;
    if (isFormInvalid) return;

    const values = this.applicationForm.value;

    console.log("Form Values:", values);

    this.applicationForm.reset();
  }

  getErrorMessage(controlName: string, errorName: string) {
    const control = this.applicationForm.get(controlName);

    if (control?.hasError(errorName) && control.touched) {
      switch (errorName) {
        case "required":
          return `Enter ${controlName}`;

        case "minlength":
          return `Enter at least 3 characters`;

        case "email":
          return "Enter a valid email address";

        default:
          return null;
      }
    }
    return null;
  }

  onAddExperience() {
    const control = new FormControl("");

    (<FormArray>this.applicationForm.get("pastExperience")).push(control);

    console.log(this.applicationForm);
  }

  getControls() {
    const formArrayControl = this.applicationForm.get(
      "pastExperience"
    ) as FormArray;

    return formArrayControl.controls;
  }
}
