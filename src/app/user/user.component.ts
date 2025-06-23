import { Component, signal, computed, Input, input, EventEmitter, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: {name: string, id: string, avatar: string};
  @Output() select = new EventEmitter<string>(); 

  get avatarPath() {
    return 'assets/users/' + this.user.avatar;
  }

  onUserSelected() {
    this.select.emit(this.user.name);
  }
}