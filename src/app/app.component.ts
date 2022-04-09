import { ApiService } from './services/api.service';
import { DialogComponent } from './dialog/dialog.component';
import { Component, Inject, OnInit ,ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'reusedClothes';
  constructor(public dialog:MatDialog,private api:ApiService) {}

  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'40%'
    }).afterClosed().subscribe((val:any)=>{
      if(val==='save'){
        this.getallPieces();
      }
    })
  }

  showallPices = []
  getallPieces(){
    this.api.getPiece()
    .subscribe({
      next : (res:any)=>{
        this.showallPices = res ;
        // console.log('All Pices : ',this.showallPices);
      },
      error : (err:any)=>{
        alert("Error while featching the records :")
      }
    });


  }


  ngOnInit():void{
    this.getallPieces();
  }

}
