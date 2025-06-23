import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) taskData!: {id: string, userId: string, dueDate: string, title: string, summary: string};
  @Output() complete = new EventEmitter<string>();

  public onComplete() {
    this.complete.emit(this.taskData.id);
  }
}
