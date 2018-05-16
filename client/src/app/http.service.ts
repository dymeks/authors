import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllAuthors(){
    return this._http.get('/authors');
  }

  deleteAuthor(authorId) {
    return this._http.delete('/authors/'+authorId);
  }

  createAuthor(newAuthor){
    return this._http.post('/authors',newAuthor);
  }

  findAuthor(authorId){
    return this._http.get('/authors/'+authorId);
  }

  updateAuthor(authorId,currentAuthor){
    return this._http.put('/authors/'+authorId,currentAuthor);
  }

  createQuote(authorId,quote){
    return this._http.post('/quotes/'+ authorId,quote);
  }
}
