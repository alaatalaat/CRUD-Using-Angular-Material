import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.scss']
})
export class ShowAllComponent implements OnInit {

  allPices:any = [] ;
  constructor(private api:ApiService) {}
  showAllPieces(){
    this.api.getPiece()
    .subscribe((res:any)=>{
        this.allPices = res ;
        console.log(this.allPices);
      },
    );
  }

  ngOnInit(): void {
    this.showAllPieces();
  }

}
