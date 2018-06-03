import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../shared/custom-validators';
import { HttpClient } from '@angular/common/http';
import { Settings } from '../../shared/settings';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.email
      ], this.checkUserName.bind(this)),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w{4,8}$/)
      ]),
      birthDate: new FormControl('', [
        Validators.required,
        CustomValidators.passedDateRequired
      ]),
      hobbies: new FormGroup({
        coal: new FormControl(),
        beer: new FormControl(),
        music: new FormControl(),
        films: new FormControl()
      }),
    }, CustomValidators.atLeastOne);
  }

  checkUserName(control) {
    return this.http
      .get(Settings.DOES_IT_EXIST, { params: { username: control.value } })
      .pipe(
        map((resp: any) => (resp.ok) ? null : {error: resp.error})
      );
  }

  ngOnInit() {
  }

}
