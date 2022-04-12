import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, startWith, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-froala-test';

  myForm: FormGroup;
  testo$: Observable<string>;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      testo: [''],
    });

    this.testo$ = this.myForm.get('testo')!.valueChanges.pipe(startWith(''));
  }
}
