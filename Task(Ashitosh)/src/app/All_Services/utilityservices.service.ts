import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityservicesService {

  product:[
    {product:"Refrigrator",id:"01"},
    {product:"TV",id:"02"},
    {product:"Mobile",id:"03"}
  ]
  constructor() { }
}
