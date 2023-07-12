import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  // ngONInit() Life cycle method runs when the component loads

  toggleAddTask() {
    console.log('toggleAddTask');
  }
}
