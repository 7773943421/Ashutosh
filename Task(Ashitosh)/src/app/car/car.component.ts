import { Component, OnInit } from '@angular/core';
import { CarserviceService } from '../carservice.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  carinfo:any=[];

  constructor(private htCarservice:CarserviceService) { }

  ngOnInit() {
   this.getCar();
  }
  getCar(){
    this.htCarservice.cardata().subscribe(res=>{
      console.log(res);
      this.carinfo=res;
      
    })
  }
  acService(id,body){
    if(!body.totalBill){
     body.totalBill=0;
    }
    body.acService=500;
    body.totalBill+=500;
this.htCarservice.update(id,body).subscribe(res=>{
  console.log(res);
  

})
  }
  dnP(id,body){
    if(!body.totalBill){
      body.totalBill=0;
     }
    body.dentingAndPainting=2000;
    body.totalBill+=2000;

    this.htCarservice.update(id,body).subscribe(res=>{

    })

  }
  cC(id,body){
    if(!body.totalBill){
      body.totalBill=0;
     }
    body.carCleaning=2500
    body.totalBill+=2500;

    this.htCarservice.update(id,body).subscribe(res=>{

    })
  }
  cW(id,body){
    if(!body.totalBill){
      body.totalBill=0;
     }
    body.carWash=1000;
    body.totalBill+=1000;

    this.htCarservice.update(id,body).subscribe(res=>{

    })
    
  }
  deleteCar(id){
    this.htCarservice.delete(id).subscribe(res=>{
      this.getCar();
    })
  }
  checkBill(body){
    if(body.totalBill){
      return true;
    }
  }
}
