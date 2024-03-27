import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { TodoService } from '../todo.service';
import { SHARED } from '../../shared';


@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [SHARED],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css'
})

export class TodosListComponent implements OnInit, OnDestroy {
  title = 'demo-ang';
  sub!: Subscription;
  constructor(public todoService : TodoService) {
  }

  ngOnInit(): void {
    this.sub = this.todoService.getTodos().subscribe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  toggleCompleted(id: number): void {
    this.todoService.toggleCompleted(id);
  }
}
