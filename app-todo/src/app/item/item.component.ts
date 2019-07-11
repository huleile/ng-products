import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input()
  todo: Todo;

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

  toggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

}
