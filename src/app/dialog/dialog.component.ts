import { ApiService } from './../services/api.service';
import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, FormGroup,FormBuilder, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  actionBtn : string = "Save"
  kind !:string
  kindList = ["Male","Female"]
  PieceForm !:FormGroup
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);


  constructor(
    private formBuilder:FormBuilder,
    private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editData :any ,
    private dialogRef:MatDialogRef<DialogComponent>,
    ){}
  ngOnInit(): void {
    this.PieceForm = this.formBuilder.group({
      pieceName : ['',Validators.required],
      pCategory : ['',Validators.required],
      price:['',Validators.required],
      pImage : ['',Validators.required],
      pkind : ['',Validators.required],
      pDescription : ['',Validators.required]
    });

    if(this.editData){
      this.actionBtn = "Update"
      this.PieceForm.controls['pieceName'].setValue(this.editData.pieceName);
      this.PieceForm.controls['pCategory'].setValue(this.editData.pCategory);
      this.PieceForm.controls['price'].setValue(this.editData.price);
      this.PieceForm.controls['pImage'].setValue(this.editData.pImage);
      this.PieceForm.controls['pkind'].setValue(this.editData.pkind);
      this.PieceForm.controls['pDescription'].setValue(this.editData.pDescription);
    }
  }

  addPiece(){
    if(!this.editData){
      if(this.PieceForm.valid){
        this.api.postPiece(this.PieceForm.value)
        .subscribe({
          next : (res) =>{
            alert("Product added successfully");
            this.PieceForm.reset();
            this.dialogRef.close('save');
          },
          error : ()=>{
            alert("error while added piece")
          }
        })
      }
    }else{
      this.updateData();
    }
  }

  updateData(){
    this.api.putPiece(this.PieceForm.value,this.editData.id)
    .subscribe({
      next : (res)=>{
        alert('Pieces Updated Successfuly !');
        this.PieceForm.reset();
        this.dialogRef.close('update');
      },
      error : ()=>{
        alert('Error while updating the record !')
      }
    })
  }

}
