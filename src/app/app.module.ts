import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FroalaViewModule } from 'angular-froala-wysiwyg';
import { AppComponent } from './app.component';
import { FroalaModule } from './froala-component/froala-component.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FroalaModule, ReactiveFormsModule, FroalaViewModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
