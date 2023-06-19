import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-from2',
  templateUrl: './reactive-from2.component.html',
  styleUrls: ['./reactive-from2.component.css']
})
export class ReactiveFrom2Component implements OnInit {
  onSubmit(_t4: any) {
    throw new Error('Method not implemented.');
    }
    
      constructor(private router:Router) { }
    
      ngOnInit( ) {
        
        
      }
      gotocar(pageName:string):void{
this.router.navigate([`${pageName}`]);
      }
    


}



