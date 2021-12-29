import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pagination';
   pno:any=2;
   obj=[{uname:"arjun"  ,city:"hyd"},
        {uname:"krishna",city:"chennai"},      
        {uname:"Bvsreddy",city:"Pdr"},
        {uname:"Mamatha",city:"Jgl"},
        {uname:"Karuna",city:"gpr"},
        {uname:"chinnaArjun",city:"USA"},
  ]
}
