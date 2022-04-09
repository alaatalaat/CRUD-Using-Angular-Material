

import { Component, Inject, OnInit ,ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}
@Component({
  selector: 'app-show-pieces',
  templateUrl: './show-pieces.component.html',
  styleUrls: ['./show-pieces.component.scss']
})
export class ShowPiecesComponent implements OnInit {

  displayedColumns: string[] = ['pieceName', 'category', 'price', 'image','kind','description','action'];
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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
        // console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator ;
        this.dataSource.sort = this.sort ;
        this.showallPices = res ;
        // console.log('All Pices : ',this.showallPices);
      },
      error : (err:any)=>{
        alert("Error while featching the records :")
      }
    });


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editPiece(row:any){
    this.dialog.open(DialogComponent,{
      width:'40%',
      data: row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getallPieces();
      }
    })
  }

  deletePiece(id:number){
    this.api.deletePiece(id).subscribe({
      next : (res:any)=>{
        alert('Product Deleted Successfully !');
        this.getallPieces();
      },
    })
  }
  ngOnInit():void{
    this.getallPieces();
  }

}
