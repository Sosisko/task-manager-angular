import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.scss',
})
export class AllTasksComponent { }
