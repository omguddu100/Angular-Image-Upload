import { Component, OnInit } from '@angular/core';
export interface imgCollection {
  filePath: string;
}
@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})

export class ImageGalleryComponent implements OnInit {
  // fileUpload = [
  //   {
  //     filePath: 'https://cdn-images-1.medium.com/max/1200/0*2FNo1Wxk0kZX0QoH.png',
  //   }
    
  // ];
  
  images: imgCollection[] = [
    {filePath: 'https://cdn-images-1.medium.com/max/1200/0*2FNo1Wxk0kZX0QoH.png'},
    {filePath: 'https://i.imgur.com/EgrRejl.png'},
    {filePath: 'https://cdn-images-1.medium.com/max/1200/0*2FNo1Wxk0kZX0QoH.png'},
    {filePath: 'https://cdn-images-1.medium.com/max/1200/1*NlAVjYOR5aXyC3Fc8YUH1g.png'},
    {filePath: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {filePath: 'https://cdn-images-1.medium.com/max/1200/1*UJ68N887kfjee-bSvCIdIQ.png'},
    {filePath: 'https://cdn-images-1.medium.com/max/1200/0*2FNo1Wxk0kZX0QoH.png'},
    {filePath: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {filePath: 'https://cdn-images-1.medium.com/max/1200/0*2FNo1Wxk0kZX0QoH.png'},
    {filePath: 'https://i.imgur.com/EgrRejl.png'},
    {filePath: 'https://cdn-images-1.medium.com/max/1200/0*2FNo1Wxk0kZX0QoH.png'},
    {filePath: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {filePath: 'https://cdn-images-1.medium.com/max/1200/1*UJ68N887kfjee-bSvCIdIQ.png'},
    {filePath: 'https://cdn-images-1.medium.com/max/1200/0*2FNo1Wxk0kZX0QoH.png'},
     {filePath: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
