import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageUtils } from 'src/app/utils/local-storage.utils';

@Component({
  selector: 'app-eg-user',
  templateUrl: './eg-user.component.html',
  styleUrls: ['./eg-user.component.css']
})
export class EgUserComponent implements OnInit {

  constructor(
    private router: Router
    
  ) { }

  ngOnInit(): void {
  }

  logout(){
    LocalStorageUtils.deleteToken
    this.router.navigate([''])

  }
}
