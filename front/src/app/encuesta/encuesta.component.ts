import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EncuestaService } from '../services/encuesta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css'],
})
export class EncuestaComponent implements OnInit {
  myForm!: FormGroup;
  constructor(
    public encuestaService: EncuestaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      edad: new FormControl(''),
      sexo: new FormControl(''),
      procedencia: new FormControl(''),
      acompañamiento: new FormControl(''),
      medioConocimiento: new FormControl(''),
      motivoEleccion: new FormControl(''),
      tieneReserva: new FormControl(''),
      tipoHospedaje: new FormControl(''),
      calificacionHospedaje: new FormControl(''),
      materialInformativo: new FormControl(''),
      informacionSecretariaTurismo: new FormControl(''),
      oficinaInformacion: new FormControl(''),
      tipoInformacion: new FormControl(''),
      medioInformacionSolicitada: new FormControl(''),
      materialEntregado: new FormControl(''),
      calificacionInformacion: new FormControl(''),
      recibioInfoExtra: new FormControl(''),
      tipoInfoExtra: new FormControl(''),
      destinoCompleto: new FormControl(''),
      recomendaria: new FormControl(''),
    });
  }

  onSubmit() {
    const result = this.encuestaService
      .sendEncuesta(this.myForm.value)
      .subscribe({
        next: (response) => {
          console.log('respuesta', response);
        },
        error: (error) => {
          console.log('error', error);
        },
      });
    console.log(this.myForm);
  }
}
