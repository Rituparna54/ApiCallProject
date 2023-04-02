import { Component } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import {UserResponse} from './UserResponse'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apicallproject';
  results='';
  constructor(private http: HttpClient){
    
  }
  ngOnInit():void{
    const req = this.http.post('https://jsonplaceholder.typicode.com/posts',
    {
      title: 'foo',
      body: 'bar',
      userId: 1
    })
    .subscribe(
      res=>
      {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    )
  }
}
