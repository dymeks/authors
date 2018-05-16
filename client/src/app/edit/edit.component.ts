import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  currentAuthor;
  authorId;
  errors;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.authorId = params['id']);
    this.currentAuthor = {name:""}
    this.findAuthor();
  }

  findAuthor(){
    let observable = this._httpService.findAuthor(this.authorId);
    observable.subscribe(data => {
      console.log(data);
      if(!data['status']){
        this.errors = data['body'];
      } else {
        this.currentAuthor = data['author'];
      }
    })
  }

  submitUpdateAuthor(){
    let observable = this._httpService.updateAuthor(this.authorId,this.currentAuthor);
    observable.subscribe(data => {
      console.log(data);
      if(!data['status']){
        this.errors = data['body'];
      } else {
        this._router.navigate(['/home']);
      }
    })
  }
}
