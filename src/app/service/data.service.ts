import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable} from 'rxjs';
import { ISample } from '../sample';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService implements OnInit {
  private messageSource = new BehaviorSubject <string> ('');
  private searchItemSource = new BehaviorSubject<string>('');
  private filteredSearchMessageSource = new BehaviorSubject<any>('');
  currentMessage = this.messageSource.asObservable();
  currentSearchItem = this.searchItemSource.asObservable();
  // pwedeng url ng db yung ipalit sa url
  private url = 'http://localhost:1234/api/sample.php';

  getMessage(): Observable<ISample[]> {
    return this.http.get<ISample[]>(this.url);
  }
  constructor( private http: HttpClient ) { }
  changeMessage( message: string) {
    this.messageSource.next(message);
  }
  changeSearchItem( choice: string) {
    this.searchItemSource.next(choice);
  }
  changeFilteredSearchMessage( filtedMessage: any) {
    this.filteredSearchMessageSource.next(filtedMessage);
  }
  ngOnInit() {
  }
}
