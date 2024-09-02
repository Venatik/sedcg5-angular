import { Component } from "@angular/core";
import { Observable, filter, map, take, catchError, of } from "rxjs";

interface MovieDetail {
  title: string;
  rating: number;
}

@Component({
  selector: "app-rxjs-operators",
  standalone: true,
  imports: [],
  templateUrl: "./rxjs-operators.component.html",
  styleUrl: "./rxjs-operators.component.css",
})
export class RxjsOperatorsComponent {
  moviesOvservable = new Observable<MovieDetail>(observer => {
    observer.next({ title: "The Dark Knight", rating: 5 });
    observer.next({
      title: "Harry Potter and the Half Blood Prince",
      rating: 3,
    });
    observer.next({ title: "Goodfellas", rating: 5 });
    // observer.error("An error occurred!"); // Simulated error
    observer.next({ title: "Mr. Robot", rating: 5 });
    observer.next({ title: "Fast and Furious", rating: 2 });
  });

  movies: MovieDetail[] = [];

  ngOnInit() {
    // WITHOUT RXJS OPERATORS
    // this.moviesOvservable.subscribe(data => {
    //   if (data.rating > 3) {
    //     console.log(data);
    //   }
    // });

    // WITH RXJS OPERATORS
    console.log("** FILTER");
    // ** FILTER
    this.moviesOvservable
      .pipe(filter(data => data.rating > 3)) // ONE LINE EXPRESSION
      .subscribe(dataSubscribed => {
        console.log(dataSubscribed);
      });

    console.log("** MAP");
    // ** MAP
    this.moviesOvservable
      .pipe(
        map(data => {
          // MULTI LINE EXPRESSION
          return {
            title: data.title.toUpperCase(),
            rating: data.rating * 2,
          };
        })
      )
      .subscribe(dataSubscribed => {
        console.log(dataSubscribed);
      });

    console.log("** TAKE");
    // ** TAKE
    this.moviesOvservable.pipe(take(2)).subscribe(dataSubscribed => {
      console.log(dataSubscribed);
    });

    console.log("** MAP + FILTER");
    // ** MAP + FILTER
    this.moviesOvservable
      .pipe(
        filter(data => data.rating > 3),
        map(data => {
          return {
            title: data.title.toUpperCase(),
            rating: data.rating * 2,
          };
        })
      )
      .subscribe(dataSubscribed => {
        console.log(dataSubscribed);
      });

    console.log("** CATCH ERROR");
    // ** CATCH ERROR
    this.moviesOvservable
      .pipe(
        catchError(error => {
          console.error("Error caught:", error);
          /**
           * - Log the error in some systen
           * - Change BehaviourSubject value if error occurs
           */
          // MUST RETURN OBSERVABLE
          return of({ message: "Error message" });
        })
      )
      .subscribe(dataSubscribed => {
        console.log(dataSubscribed);
      });
  }
}
