import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { UserComponent } from "./user/user.component";

import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedName = '';

  public onUserSelected(name: string) {
      this.selectedName = name;
  }

  public get selectedUser(): {id: string, name: string} | undefined {
    return DUMMY_USERS.find((user) => user.name === this.selectedName)
  }
}