import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  })
  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.profileForm.value);
    console.log('good night');
    console.log('need how the form is working');
    console.log('other day for learn');
  }



}
