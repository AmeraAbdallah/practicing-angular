import { Component } from '@angular/core';

import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodosListComponent } from './todos-list/todos-list.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodosListComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

}
