import { Component, signal, computed, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() name!: string;
  @Input() avatar!: string;

  get avatarPath() {
    return 'assets/users/' + this.avatar;
  }

  onUserSelected() {
    
  }
}