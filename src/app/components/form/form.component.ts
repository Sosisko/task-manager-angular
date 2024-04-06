import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { iTasks } from 'src/app/modules/interface/interface';
import { TasksService } from 'src/app/services/tasks.service';
@Component({
  selector: 'app-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatButton,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  constructor(private taskService: TasksService) {}

  tasks: iTasks[] = [];
  formGroup = new FormGroup({
    id: new FormControl(2),
    title: new FormControl(''),
    deadline: new FormControl(''),
    priority: new FormControl(''),
    status: new FormControl(''),
    performer: new FormControl(''),
  });

  onAddTask(): void {
    this.taskService.postTask(this.formGroup.value as iTasks)
  }
}
