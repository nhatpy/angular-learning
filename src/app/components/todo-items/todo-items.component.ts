import { Component, inject, OnInit, output, signal } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../models/todo.type';
import { catchError } from 'rxjs/operators';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todo-items',
  imports: [HighlightCompletedTodoDirective, UpperCasePipe, FormsModule, FilterTodosPipe],
  templateUrl: './todo-items.component.html'
})
export class TodoItemsComponent implements OnInit {
  todoService = inject(TodosService);
  todos = signal<Todo[]>([]);

  searchTerm = signal<string>('');

  todoToggle = output<Todo>();

  todoClick(todo: Todo) {
    this.todoToggle.emit(todo);
  }

  ngOnInit(): void {
    this.todoService.getTodosFromApi()
    .pipe(
      catchError((error) => {
        console.error('Error fetching todos:', error);
        throw error; 
      })
    )
    .subscribe((todos) => {
      this.todos.set(todos);
    })
  }
}
