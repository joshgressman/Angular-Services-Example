import { Component, OnInit} from '@angular/core';
import { AccountsService } from './accounts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService){}

  ngOnInit(){
    //brings the value of the service accounts array upon construction of the component
   this.accounts = this.accountsService.accounts;
  }

}
