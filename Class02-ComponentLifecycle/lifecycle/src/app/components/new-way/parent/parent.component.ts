import { Component, signal, computed } from "@angular/core";
import { ChildComponent } from "../../new-way/child/child.component";
import { Todo } from "../../../types/todo.interface";
import { NgFor } from "@angular/common";

@Component({
  selector: "app-parent",
  standalone: true,
  imports: [ChildComponent],
  templateUrl: "./parent.component.html",
  styleUrl: "./parent.component.css",
})
export class ParentComponent {
  title = "Parent Component";
  count = signal(0);
  name = signal("Some initial name value");

  todos = signal<Todo[]>([]);
  onTodoCreated(todo: Todo) {
    console.log("todo in parent:", todo);

    this.todos.update(existingTodos => [...existingTodos, todo]);
  }

  // computed signal - will compute/memoize the value and will re-compute if signal that is used changes
  multipliedCount = computed(() => {
    if (this.count() === 10) {
      return this.count() * 2;
    }

    return 0;
  });

  increment() {
    // console.log(this.count()); // Reading the value of the count signal
    // this.count.set(this.count() + 1); // way 1

    // in the parameter value we read/access the value before the update
    this.count.update(value => value + 1); //way 2
  }

  decrement() {
    // this.count.set(this.count() - 1); // way 1

    this.count.update(value => value - 1); // way 2
  }

  handleChangeName(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.name.set(value);
  }
}
