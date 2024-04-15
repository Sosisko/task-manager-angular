import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    id: new FormControl(Math.floor(Math.random() * 1000000)),
    title: new FormControl('', Validators.required),
    deadline: new FormControl('', Validators.required),
    priority: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    performer: new FormControl('', Validators.required),
  });

  formGroupVAlue = this.formGroup.value

  onAddTask(): void {
    if (this.formGroup.valid) {
      this.taskService.postTask(this.formGroup.value as iTasks);
      this.formGroup.get('deadline');

    }
  } 
    
}

