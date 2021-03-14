import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { TodoService } from './../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed,
    }

    return classes;
  }

  // Change state of the todo.completed != todo.completed
  onToggle(todo:any) {
    // toggle in UI
    todo.completed = !todo.completed;
    console.log(todo.completed);
    // toggle in server
    this.todoService.toggleCompleted(todo).subscribe(data => {
      console.log(data);
    })

  }

  onDelete(todo:any) {
    this.deleteTodo.emit(todo);
  }

}
