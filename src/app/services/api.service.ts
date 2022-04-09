import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postPiece(data:any){
    return this.http.post<any>("http://localhost:3000/pieceList/",data)
  }

  getPiece(){
   return this.http.get<any>("http://localhost:3000/pieceList/");
  }

  putPiece(data:any,id:number){
    return this.http.put("http://localhost:3000/pieceList/"+id,data);
  }

  deletePiece(id:number){
    return this.http.delete("http://localhost:3000/pieceList/"+id);
  }
}
