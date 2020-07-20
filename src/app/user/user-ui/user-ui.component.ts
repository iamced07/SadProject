import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import {SearchItem} from 'src/app/search-item/search-item'
@Component({
  selector: 'app-user-ui',
  templateUrl: './user-ui.component.html',
  styleUrls: ['./user-ui.component.scss']
})
export class UserUIComponent implements OnInit {
  message: string;
  value = '';
  click = false;
  public result = [];
  filterResult = [];
  searchItemValue:string;
  myKeyword =false;
  // tslint:disable-next-line: variable-name
  private _searchTerm: string;
  searchItem:string;
  searchItems: SearchItem[]=[
    { id:1, name:'Keyword'},
    {id:2, name:'Title'},
    {id:3, name:'Author'}
  ]
  constructor( private router: Router, private data: DataService,private search: DataService,) { }
  filtersAbstract(searchString: string) {
    return this.result.filter(res => res.Abstract.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 );
   }
   filtersTitle(searchString: string) {
    return this.result.filter(res1 => res1.Title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 );
   }
   filtersAuthor(searchString: string) {
    return this.result.filter(res2 => res2.Author.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 );
   }

  onEnter(value: string) {
    this.value = value;
    this.message = this.value;
    if(this.searchItemValue=="Keyword"){
      this.filterResult = this.filtersAbstract(value);
    }else if(this.searchItemValue=="Title"){
      this.filterResult = this.filtersTitle(value);
    }else if(this.searchItemValue = "Author"){
      this.filterResult = this.filtersAuthor(value);
    }
  }
  clicked = function() {
    this.click = true;
  };
  searched(){
      this.myKeyword = true;
  }
  onSearchItemSelected(val:SearchItem){
    this.searchItemValue = val.name;
  }
  ngOnInit() {
    this.search.getMessage()
    .subscribe(data=> {this.result = data});
        this.data.currentMessage.subscribe(message => {
          this.message= message;
        })
        this.data.currentSearchItem.subscribe(choice => {
          this.searchItemValue = choice;
          this.searchItem = this.searchItemValue;
        })
     }
}
