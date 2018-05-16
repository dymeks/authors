import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allAuthors;
  errors:any;

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAllAuthors();
  }

  getAllAuthors(){
    let observable = this._httpService.getAllAuthors();
    observable.subscribe(data => {
      console.log(data);
      if(data['status']){
        this.allAuthors = data['authors'];
      } else {
        this.errors = data['body'];
      }
      // this.allAuthors = data;
    })
  }

  deleteAuthor(authorId){
    let observable = this._httpService.deleteAuthor(authorId);
    observable.subscribe(data => {
      if(!data['status']){
        this.errors = data['body'];
      }
      this._router.navigate(['/home']);
    })
  }

  showQuotes(authorId){
    // let observable = this._httpService.findAuthor(author._id);
    // observable.subscribe(data => {
    //   if(data['status']){
    //     this._router.navigate(['/authors/'+author._id+'/quotes']);
    //   } else {

    //   }
    // })
    this._router.navigate(['/authors/'+authorId+'/quotes']);
  }
}
