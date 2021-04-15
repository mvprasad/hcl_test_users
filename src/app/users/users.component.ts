import { Component, OnInit } from '@angular/core';
import { FilterOption } from './filter-option.interface';
import { UsersService } from '../users.service';
import { FormControl } from '@angular/forms';
import { User } from '../modal/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  options: FilterOption[] = [
    {
      value: 'name',
      text: 'Name'
    },
    {
      value: 'username',
      text: 'User Name'
    },
    {
      value: 'email',
      text: 'Email'
    },
    {
      value: 'phone',
      text: 'Phone'
    },
    {
      value: 'website',
      text: 'Website'
    }
  ];
  users: Array<User> = [];
  filter: FormControl = new FormControl('');
  search: FormControl = new FormControl('');
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((resp: Array<User>) => {
      this.users = resp;
    })
  }
}
