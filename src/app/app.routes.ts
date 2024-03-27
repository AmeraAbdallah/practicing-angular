import { Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
//import { TodosComponent } from './todos/todos.component';

export const routes: Routes = [
  {
    path: '', component: WelcomeComponent,
  },
  {
    path: 'todos', //component: TodosComponent
    loadComponent: () => import('./todos/todos.component').then(m => m.TodosComponent)
  }
];
