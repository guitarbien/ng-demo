import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = 'What needs to be done?';
  todos: string[] = [];
  currentPlatform: string;

  addTodo(todo: HTMLInputElement) {
    this.todos = [...this.todos, todo.value];
    todo.value = '';
  }

  changePlatform(platform: HTMLInputElement) {
    const platformMapping = {
      'AWS': '1',
      'Azure': '2',
      'Aliyun': '3'
    }

    this.currentPlatform = platformMapping[platform.value];
  }
}
