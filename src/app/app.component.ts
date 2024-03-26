import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosListComponent, AddTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-ang';

  constructor() {
  }
}
