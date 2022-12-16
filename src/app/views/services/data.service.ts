import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  token:any=localStorage.getItem('token')
  headerAdmin=new HttpHeaders()
  .set('authorization',this.token)
  .set('role','ADMIN')

  headerAll=new HttpHeaders()
  .set('authorization',this.token)

  params = new HttpParams()
  .set('secretKey',environment.secretKey)

  constructor(private http:HttpClient) {}

  getAllProducts(){
    return this.http.get(`${environment.backendUrl}/products`,{headers:this.headerAll,params:this.params})
  }

  getAllUsers(){
    return this.http.get(`${environment.backendUrl}/users`,{headers:this.headerAdmin,params:this.params})
  }

  deleteproduct(id:any){
    return this.http.delete(`${environment.backendUrl}/product/`+id,{headers:this.headerAdmin,params:this.params})
  }

  getoneproduct(id:any){
    return this.http.get(`${environment.backendUrl}/product/`+id,{headers:this.headerAdmin,params:this.params})
  }

  getoneuser(id:any){
    return this.http.get(`${environment.backendUrl}/user/`+id,{headers:this.headerAll,params:this.params})
  }

  deleteuser(id:any){
    return this.http.delete(`${environment.backendUrl}/user/`+id,{headers:this.headerAdmin,params:this.params})
  }



}
