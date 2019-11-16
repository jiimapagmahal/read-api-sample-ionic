import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Books} from "../models/books";
import {catchError, map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      })
    };
    return this.http.get('https://wizard-pubhaws.store/index.php/admin/books', httpOptions).pipe(map(this.extractData))
  }

  getBook(bookId: String){
    const httpOptions = {
      headers: new HttpHeaders({

      })
    };
    return this.http.get('https://wizard-pubhaws.store/index.php/admin/bookInfo/' + bookId, httpOptions).pipe(map(this.extractData))
  }

  private extractData(res: Response){
    let body = res;
    return (body || {});
  }
}
