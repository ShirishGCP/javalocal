import { Component,OnInit } from '@angular/core';
import { UserService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  userId: number = 0;
  username: string = ' ';
  userRole: string = ' ';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUserData();
    
  }

  loadUserData(): void {
    const username = 'shirish'; // Replace with actual username logic
    this.userService.getUser(username).subscribe(user => {
      if (user && user.length > 0) {
        const userdet = user[0];
        this.userId = userdet.userid;
        this.username = userdet.username;
        this.userRole = userdet.userrole;
      } else {
        console.error('User data is undefined or empty');
      }
    });
    
  }
}