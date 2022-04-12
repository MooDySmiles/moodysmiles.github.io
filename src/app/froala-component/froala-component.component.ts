import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-froala-component',
  templateUrl: './froala-component.component.html',
  styleUrls: ['./froala-component.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FroalaComponent),
      multi: true,
    },
  ],
})
export class FroalaComponent implements ControlValueAccessor {
  constructor() {}

  value: string = '';

  froalaOptions = {
    toolbarButtons: [
      'undo',
      'redo',
      '|',
      'fontFamily',
      'paragraphFormat',
      'lineHeight',
      '|',
      'bold',
      'italic',
      'underline',
      'strikeThrough',
      '|',
      'textColor',
      'backgroundColor',
      '|',
      'subscript',
      'superscript',
      '|',
      'quote',
      '|',
      'formatOLSimple',
      'formatUL',
      '|',
      'outdent',
      'indent',
      '|',
      'insertTable',
      'insertLink',
      'insertImage',
      'insertHR',
      '|',
      'clearFormatting',
      'fullscreen',
      'html',
      '|',
    ],
    quickInsertButtons: ['ol', 'ul', 'table', 'link', 'image', 'hr'],
    placeholderText: 'Scrivi qui il tuo documento',
    fontFamily: {
      'Sans Serif': 'Sans Serif',
      Serif: 'Serif',
      Monospace: 'Monospace',
    },
    fontFamilySelection: true,
    immediateAngularModelUpdate: true,
    language: 'it',
    heightMin: 350,
    heightMax: 500,
  };

  // event handlers
  onChange = (content: string) => { }

  onTouched = () => {}

  // implements ControlValueAccessor Interface
  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(content: any): void {
    this.value = content;
  }

  onModelChange(content: string): void {
    this.onChange(content ? content : '<p><br/></p>');
    this.onTouched();
  }
}
