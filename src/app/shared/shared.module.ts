import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BsDropdownModule} from 'ngx-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [
  ],
  providers: [
  ]
})
export class SharedModule { }
