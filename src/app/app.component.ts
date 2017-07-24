import { Component, OnInit } from '@angular/core';
import { HttpClientService } from './core/http-client/http-client.service';
import { APIService } from './core/app-config/app-config.service';
import { ApiConfig } from './core/core.constant';
import { environment } from '../environments/environment';
import { Column } from './core/classes/column';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private users = [];
  private columns = [new Column(1, 'id', 'ID'),
                    new Column(2, 'first_name', 'First Name'),
                    new Column(3, 'last_name', 'Last Name'),
                    new Column(4, 'email', 'Email'),
                    new Column(5, 'gender', 'Gender'),
                    new Column(6, 'ip_address', 'IP Address'),
                    new Column(7, 'photo_id',"Avtar")];

  constructor(private apiService: APIService,
              private httpService: HttpClientService) {

  }

  ngOnInit(){
    this.httpService.init(environment.serviceURL, ApiConfig);
    this.httpService.registerGlobalHeader('X-Requested-By', '1');
    this.httpService.registerGlobalHeader('Content-Type', 'application/json');

    this.httpService.globalErrorhandler = (response) => {
      console.log("error");
    };
    this.apiService.getUsers().subscribe(userCol => {
        this.users = userCol;
    });
  }
}
