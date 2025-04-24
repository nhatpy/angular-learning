import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.type';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: Todo[], searchTerm: string): Todo[] {
    if (!todos || !searchTerm) {
      return todos;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return todos.filter(todo => todo.title.toLowerCase().includes(lowerCaseSearchTerm));
  }

}
