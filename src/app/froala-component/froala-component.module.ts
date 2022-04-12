import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
// Import italian language
import 'froala-editor/js/languages/it.js';
// Import all Froala Editor plugins.
import 'froala-editor/js/plugins.pkgd.min.js';
import { FroalaComponent } from './froala-component.component';

@NgModule({
  declarations: [FroalaComponent],
  imports: [
    CommonModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  exports: [FroalaComponent],
})
export class FroalaModule {}
