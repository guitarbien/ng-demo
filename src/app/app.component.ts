import { Component } from '@angular/core';
import { Cloud } from './cloud';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = 'What needs to be done?';
  todos: string[] = [];
  currentPlatform: string;

  // homework 02 所用的平台列表
  clouds: Cloud[] = [
    {id: 0, name: 'AWS'},
    {id: 1, name: 'Azure'},
    {id: 2, name: 'Aliyun'}
  ];

  addTodo(todo: HTMLInputElement) {
    this.todos = [...this.todos, todo.value];
    todo.value = '';
  }

  changePlatform(platform: HTMLSelectElement) {
    this.currentPlatform = this.clouds.filter((cloud) => cloud.id.toString() === platform.value)[0].id.toString();
  }
}
