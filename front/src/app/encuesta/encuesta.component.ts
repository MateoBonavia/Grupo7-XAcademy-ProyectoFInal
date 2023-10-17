import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      edad: new FormControl('', [Validators.required]),
      sexo: new FormControl('', [Validators.required]),
      procedencia: new FormControl('', [Validators.required]),
      acompañamiento: new FormControl('', [Validators.required]),
      medioConocimiento: new FormControl('', [Validators.required]),
      motivoEleccion: new FormControl('', [Validators.required]),
      tieneReserva: new FormControl('', [Validators.required]),
      tipoHospedaje: new FormControl('', [Validators.required]),
      calificacionHospedaje: new FormControl('', [Validators.required]),
      materialInformativo: new FormControl(''),
      informacionSecretariaTurismo: new FormControl(''),
      oficinaInformacion: new FormControl(''),
      tipoInformacion: new FormControl(''),
      medioInformacionSolicitada: new FormControl(''),
      materialEntregado: new FormControl(''),
      calificacionInformacion: new FormControl(''),
      recibioInfoExtra: new FormControl(''),
      tipoInfoExtra: new FormControl(''),
      destinoCompleto: new FormControl('', [Validators.required]),
      recomendaria: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    const edad = this.myForm.get('edad')?.errors?.['required'];
    const sexo = this.myForm.get('sexo')?.errors?.['required'];
    const procedencia = this.myForm.get('procedencia')?.errors?.['required'];
    const acompañamiento =
      this.myForm.get('acompañamiento')?.errors?.['required'];
    const medioConocimiento =
      this.myForm.get('medioConocimiento')?.errors?.['required'];
    const motivoEleccion =
      this.myForm.get('motivoEleccion')?.errors?.['required'];
    const tieneReserva = this.myForm.get('tieneReserva')?.errors?.['required'];
    const tipoHospedaje =
      this.myForm.get('tipoHospedaje')?.errors?.['required'];
    const calificacionHospedaje = this.myForm.get('calificacionHospedaje')
      ?.errors?.['required'];

    const destinoCompleto =
      this.myForm.get('destinoCompleto')?.errors?.['required'];
    const recomendaria = this.myForm.get('recomendaria')?.errors?.['required'];

    if (
      edad ||
      sexo ||
      procedencia ||
      acompañamiento ||
      medioConocimiento ||
      motivoEleccion ||
      tieneReserva ||
      tipoHospedaje ||
      calificacionHospedaje ||
      destinoCompleto ||
      recomendaria
    ) {
      alert('Verifique los datos ingresados');
    } else {
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
}
