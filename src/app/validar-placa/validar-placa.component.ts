import { Component } from '@angular/core';
import { PlacaService } from '../services/placa.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-validar-placa',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './validar-placa.component.html',
  styleUrl: './validar-placa.component.css'
})

export class ValidarPlacaComponent {
  placa: string = '';
  fechaHora: string = '';
  mensaje: string | null = null;

  constructor(private placaService: PlacaService) { }

  onSubmit() {

    const fechaHoraFormateada = new Date(this.fechaHora).toLocaleString('en-US', { timeZone: 'America/Guayaquil' });

    //const fechaHoraFormateada = new Date(this.fechaHora).toISOString();

    const placaRequest = {
      placa: this.placa,
      fechaHora: this.fechaHora
    };

    console.log('Solicitud enviada:', placaRequest);

    this.placaService.validarPlaca(placaRequest).subscribe({
      next: response => {
        this.mensaje = response.mensaje;
      },
      error: err => {
        //console.error('Error capturado:', err);
        if (err.error && err.error.message) {
          this.mensaje = err.error.message;
        } else {
          this.mensaje = 'Ocurrió un error al validar la placa';
        }
      }
    });
  }
}
