import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { iTasks } from 'src/app/modules/interface/interface';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogComponent } from '../dialog/dialog.component';
import { TasksService } from 'src/app/services/tasks.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],

  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent {
  tasks!: Observable<iTasks[]>;

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    console.log(this.tasks);
  }

  displayedColumns: string[] = [
    'position',
    'name',
    'deadline',
    'priority',
    'status',
    'performers',
  ];

  constructor(public dialog: MatDialog, private taskService: TasksService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
