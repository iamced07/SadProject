import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { DataService } from '../service/data.service';
import { FormBuilder } from "@angular/forms";
import {SearchItem} from 'src/app/search-item/search-item'
import { Router } from '@angular/router';

@Injectable()
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
 
  mySearch = false;
  myStart = true;
  message: string;
  value = '';
  searchItemValue: string ='';
  click = false;
  searchItem:any;
  searchItems: SearchItem[];
  onSearchItemSelected(val:SearchItem){
    this.searchItemValue = val.name;
  }
  Search() {
    this.mySearch = true;
    this.myStart = false;
  }

  onEnter(value: string) {
    this.value = value;
    this.message = this.value;
    }
    clicked = function() {
      this.click = !this.click;
    };

    constructor( private router: Router, private data: DataService,) { }
  
  newMessage() {
    this.data.changeMessage(this.value);
    this.data.changeSearchItem(this.searchItemValue);
  }
  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      this.value = message;
     });
     
     this.newMessage();  
     this.searchItems=[
      { id:1, name:'Keyword'},
      {id:2, name:'Title'},
      {id:3, name:'Author'}
    ]
  }
}
