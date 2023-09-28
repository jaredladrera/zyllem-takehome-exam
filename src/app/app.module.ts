import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZyllemApiService } from './app.service';
import { ArticleModule } from './components/articles';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticlePipe } from './search/article.pipe';
import { ArticleVideoComponent } from './components/articles/video/article.video.component';
import { TruncatePipe } from './truncate/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArticlePipe,
    ArticleVideoComponent,
    TruncatePipe

  ],
  imports: [
    BrowserModule,
    ArticleModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ZyllemApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
