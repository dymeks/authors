import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor:any;
  author;
  errors;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newAuthor = {name:""}
  }

  submitNewAuthor(){
    let observable = this._httpService.createAuthor(this.newAuthor);
    observable.subscribe(data => {
      if(!data['status']){
        this.errors= data['body'];
      }
      this._router.navigate(['/home']);
    })
  }

}
