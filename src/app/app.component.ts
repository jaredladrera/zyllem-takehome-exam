import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component,
  OnInit
} from '@angular/core';

import { ZyllemApiService } from "./app.service";
import { Article, VideoArticle, ArticleType } from './model/article';
import { filter } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class AppComponent implements OnInit {

  constructor(
    private readonly apiService: ZyllemApiService,
    private readonly cdr: ChangeDetectorRef
  ) { }

  filteredArticle = "";
  getAllArticle: Article[];
  results: Article[];
  videoArticleHighlight: VideoArticle;

  get articles() {
    return this.results;
  }

  getFiltered(evt){
    let str = evt.target.value;

    this.filteredArticle = str;
    // if (typeof str === 'string') {
    //   console.log('test')
    //   // this.filteredArticle =this.results.filter(val => str === val.type);
    //   console.log(this.filteredArticle);
    // }
  }

  arTypes: ArticleType;


  ngOnInit() {
    this.apiService.getArticles()
      .subscribe(result => {
        console.log('results', result)
        this.results = result;
        this.cdr.markForCheck();
      });
  }
}
