import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , map, tap} from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url = 'https://dummyjson.com/todos';
  public todossignal = signal<Todo[]>([])
  constructor(private http : HttpClient) { }

  getTodos(): Observable<any> {
    return this.http.get<any>(this.url)
    .pipe(
      tap(data => {
        this.todossignal.set(data.todos)
      })
    );
  }

  addTodo(todo: string | null): void {
    this.todossignal.update(todos => [{id: this.todossignal.length, todo, completed: false, userId: 1}, ...todos])
  }

  toggleCompleted(id: number): void {

    this.todossignal.update(todos => todos.map(todo => {
      if(todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    }));

  }

}
