import { Component } from '@angular/core';

import { TodoService } from '../todo.service';
import { SHARED } from '../../shared';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [SHARED],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
  exportAs: ''
})
export class AddTodoComponent {
  todo = '';
  error = '';

  constructor( private todoService: TodoService){}

  onSubmit() {
    if(this.todo === '') {
      this.error = "This field is required";
      return
    }

    this.todoService.addTodo(this.todo);
    this.todo = "";
    this.error = "";
  }

}
