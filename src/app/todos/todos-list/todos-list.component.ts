import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Subscription, map, tap } from 'rxjs';
import { Todo } from '../todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
