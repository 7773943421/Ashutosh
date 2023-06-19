import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CarserviceService {
  url="http://localhost:3000/Car";

  constructor(private httpclient:HttpClient) { }
  cardata(){
  return this.httpclient.get(this.url);
}
update(id,body){
  return this.httpclient.put(this.url+'/'+id,body);
}
delete(id){
  return this.httpclient.delete(this.url+'/'+id);
}
}
