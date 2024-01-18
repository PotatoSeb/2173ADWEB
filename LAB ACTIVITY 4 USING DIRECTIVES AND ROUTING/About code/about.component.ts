import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  staff = [ 
    { firstName: 'Java', lastName: 'Language', email: 'Coding ', role: 'Work For RIOT games' },   
    { firstName: 'JavaScript', lastName: 'Language', email: 'Editing clips', role: 'Work for META' }, 
    { firstName: 'C++', lastName: 'Language', email: 'Editing Videos', role: 'Founder of X' }, 
    { firstName: 'Python', lastName: 'Language', email: 'Magician', role: 'Videographer and editor for Marvel' }, 
    { firstName: 'Unity', lastName: 'Language', email: 'Gaming Session', role: 'Magician Sa Pilipinas' } 
    ];
}
