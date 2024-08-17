import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodosComponent } from "./todos.component";
import { SingleTodoComponent } from "./components/single-todo/single-todo.component";

@NgModule({
  declarations: [TodosComponent, SingleTodoComponent],
  imports: [CommonModule],
  exports: [TodosComponent], // Added so AppModule can use TodosComponent from TodosModule. Exports enables the use of Components and Services from one module in another module.
})
export class TodosModule {}
