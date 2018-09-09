import { Component, OnInit } from '@angular/core';
import { BackendInfoServiceService } from '../../../shared/service/backend/backend-info-service.service';

@Component({
  selector: 'app-backend-info-page',
  templateUrl: './backend-info-page.component.html',
  styleUrls: ['./backend-info-page.component.css']
})
export class BackendInfoPageComponent implements OnInit {

  keys: string[] = [];
  jsonResponse: JSON;
  response: string = 'please select button';
  responsekeys: string[] = ['test'];
constructor(private backendService: BackendInfoServiceService) { }

  ngOnInit() {
    this.backendService.getInfoList().subscribe(data => {
      console.log('got:' + data);
      this.keys = data;
    });
  }


  getInfo(key: string) {
    console.log('getting info: ' + key);
    this.backendService.getInfoForKey(key).subscribe(data => {

      console.log('got:' + JSON.stringify(data));
      this.response = JSON.stringify(data);
      this.jsonResponse = data;
      this.responsekeys = Object.keys(data);
    });

  }

}
