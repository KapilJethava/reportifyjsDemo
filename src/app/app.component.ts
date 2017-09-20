import { Component, OnInit } from '@angular/core';
import { HttpClientService } from './core/http-client/http-client.service';
import { APIService } from './core/app-config/app-config.service';
import { ApiConfig } from './core/core.constant';
import { environment } from '../environments/environment';
import { Field } from './reportModule/classes/field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private users = [];
  private columns = [new Field('id', 'ID'),
    new Field('first_name', 'First Name'),
    new Field('last_name', 'Last Name'),
    new Field('email', 'Email'),
    new Field('gender', 'Gender'),
    new Field('ip_address', 'IP Address'),
    new Field('photo_id',"Avtar")];

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
