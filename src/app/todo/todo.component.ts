import { Component } from '@angular/core';
import { TodoItemsComponent } from '../components/todo-items/todo-items.component';

@Component({
  selector: 'app-todo',
  imports: [TodoItemsComponent],
  templateUrl: './todo.component.html'
})
export class TodoComponent {

}
