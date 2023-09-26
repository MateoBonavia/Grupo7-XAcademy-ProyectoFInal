import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css'],
})
export class EncuestaComponent implements OnInit {
  myForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      user: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit(form: FormGroup) {
    console.log(form);
  }
}
