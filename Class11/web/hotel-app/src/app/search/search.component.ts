import { Component, ElementRef, input, output, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { debounceTime, fromEvent, Subscription } from "rxjs";

@Component({
  selector: "app-search",
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.css",
})
export class SearchComponent {
  searchTerm = input<string>("");
  updateSearchTerm = output<any>();
  @ViewChild("searchInput") searchInput!: ElementRef;
  subscription: Subscription = new Subscription();

  ngAfterViewInit() {
    this.subscription = fromEvent(this.searchInput.nativeElement, "input")
      .pipe(debounceTime(500))
      .subscribe(event => {
        this.updateSearchTerm.emit(event);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}