import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactoService } from '../services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  myForm!: FormGroup;
  constructor(public contactoService: ContactoService) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      comments: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    const result = this.contactoService.sendMessage(this.myForm).subscribe({
      next: (response: any) => {
        return true;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
