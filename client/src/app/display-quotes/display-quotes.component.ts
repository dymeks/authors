import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-display-quotes',
  templateUrl: './display-quotes.component.html',
  styleUrls: ['./display-quotes.component.css']
})
export class DisplayQuotesComponent implements OnInit {
  authorId;
  author;
  Quote;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.author = {name:""}
    this.Quote = {quote:""}
    this._route.params.subscribe((params: Params) => this.authorId = params['id']);
    this.findAuthor();
  }

  findAuthor(){
    let observable = this._httpService.findAuthor(this.authorId);
    observable.subscribe(data => {
      console.log(data)
      if(data['status']){
        this.author = data['author'];
        console.log(this.author);
      } else {
        
        console.log(this.author);
      }
    })
  }

  newQuote(){
    let observable = this._httpService.createQuote(this.authorId,this.Quote);
    observable.subscribe(data =>{
      if(data['status']){
        this._router.navigate(['/authors/'+this.authorId+'/quotes']);
        
      }
    })
  }
}
