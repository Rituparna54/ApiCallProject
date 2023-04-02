import { Component , OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Observable } from 'rxjs';
import { Idata } from '../Idata'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
public response:Observable<Idata[]>;
constructor(public service:SharedService){
  this.response=this.service.getPosts();
 
}
ngOnInit(){}
}
