import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { TasksListComponent } from 'src/app/components/tasks-list/tasks-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, HeaderComponent, TasksListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {


  constructor() { }

  ngOnInit(): void {
  }


}
