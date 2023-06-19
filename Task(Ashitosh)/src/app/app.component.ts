import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
Name:string="I am coming from parent";
  data: string;
constructor(){
  

}

onparent(val){
console.log('From child to parent,',val);

}
}
function changecolor() {
  throw new Error('Function not implemented.');
}

