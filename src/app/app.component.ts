import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular-todo-list';
  name:string = 'Alena';

  constructor(){
    this.changeName('Alan');
  }

  changeName(name:string):void{
    this.name = name;
  }
}
