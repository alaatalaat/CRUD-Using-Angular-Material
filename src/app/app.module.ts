import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowAllComponent } from './show-all/show-all.component';
import { ShowPiecesComponent } from './show-pieces/show-pieces.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    ShowAllComponent,
    ShowPiecesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    MatToolbarModule ,
    MatIconModule ,
    MatButtonModule ,
    MatDialogModule ,
    MatInputModule ,
    MatSelectModule ,
    MatRadioModule ,
    ReactiveFormsModule ,
    FormsModule ,
    HttpClientModule ,
    MatTableModule ,
    MatPaginatorModule ,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
