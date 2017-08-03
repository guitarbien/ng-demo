import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = 'What needs to be done?';
  todos: string[] = [];

  addTodo(todo: HTMLInputElement) {
    this.todos.push(todo.value);
    todo.value = '';
  }
}
