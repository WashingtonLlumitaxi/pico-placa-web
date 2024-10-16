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

  constructor(private placaService: PlacaService) {}

  onSubmit() {
    const placaRequest = {
      placa: this.placa,
      fechaHora: this.fechaHora
    };

    this.placaService.validarPlaca(placaRequest).subscribe({
      next: response => {
        this.mensaje = response.mensaje;
      },
      error: () => {
        this.mensaje = 'Ocurrió un error al validar la placa';
      }
    });
  }

}
