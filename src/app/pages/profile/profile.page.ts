// profile.page.ts
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  user: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    
    this.user = this.userService.getRegisteredUser();
  }
}


