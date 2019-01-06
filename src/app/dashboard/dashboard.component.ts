import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 fileUpload = {filePath: 'https://cdn-images-1.medium.com/max/1200/0*2FNo1Wxk0kZX0QoH.png'};
 onSelectFile(event){
  
 }
 onSubmit(){
   const formData = new FormData();
  
 }

  constructor(private breakpointObserver: BreakpointObserver) {}
}