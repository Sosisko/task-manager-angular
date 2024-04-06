// import { Injectable } from '@angular/core';
// import { iTasks } from '../modules/interface/interface';

// @Injectable({
//   providedIn: 'root',
// })
// export class TasksService {
//   constructor() {}

//   tasks: iTasks[] = localStorage.getItem('tasks')
//     ? JSON.parse(localStorage.getItem('tasks') as string)
//     : [];

//   getTasks(): iTasks[] {
//     return this.tasks;
//   }

//   postTask(task: iTasks): void {
//     this.tasks.push(task);
//     localStorage.setItem('tasks', JSON.stringify(this.tasks));
//     console.log(this.tasks);
//   }
//   deleteTask(task: iTasks): void {
//     this.tasks = this.tasks.filter((t) => t.id !== task.id);
//     localStorage.setItem('tasks', JSON.stringify(this.tasks));
//     console.log(this.tasks);
//   }
// }

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { iTasks } from '../modules/interface/interface';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasksSubject: BehaviorSubject<iTasks[]> = new BehaviorSubject<iTasks[]>([]);
  public tasks$: Observable<iTasks[]> = this.tasksSubject.asObservable();

  constructor() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasksSubject.next(JSON.parse(savedTasks));
    }
  }

  getTasks(): Observable<iTasks[]> {
    return this.tasksSubject.asObservable();
  }

  postTask(task: iTasks): void {
    const currentTasks = this.tasksSubject.getValue();
    const updatedTasks = [...currentTasks, task];
    this.tasksSubject.next(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    console.log(updatedTasks);
  }

  deleteTask(task: iTasks): void {
    const currentTasks = this.tasksSubject.getValue();
    const updatedTasks = currentTasks.filter((t) => t.id !== task.id);
    this.tasksSubject.next(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    console.log(updatedTasks);
  }
}