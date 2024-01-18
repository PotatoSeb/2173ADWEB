import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  staff = [ 
    { firstName: 'Java', lastName: 'Language', email: 'Coding ', role: 'Work For RIOT games' },   
    { firstName: 'JavaScript', lastName: 'Language', email: 'Editing clips', role: 'Work for META' }, 
    { firstName: 'C++', lastName: 'Language', email: 'Editing Videos', role: 'Founder of X' }, 
    { firstName: 'Python', lastName: 'Language', email: 'Magician', role: 'Videographer and editor for Marvel' }, 
    { firstName: 'Unity', lastName: 'Language', email: 'Gaming Session', role: 'Magician Sa Pilipinas' } 
    ];

  imageUrl:string="assets/seb.jpg"; 
  imageW: number = 110;

  // Another *ngfor example 
products = [
  { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Commission 1', price: '$40.00 - $80.00' },
  { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Commission 2', price: '$50.00 - $90.00' },
  { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Commission 3', price: '$60.00 - $100.00' },
  // Add more product items as needed
];
}
