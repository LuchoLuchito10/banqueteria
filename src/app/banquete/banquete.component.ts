import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banquete',
  standalone: true,
  imports: [CommonModule], // Importar para usar pipes como 'currency'
  templateUrl: './banquete.component.html',
  styleUrls: ['./banquete.component.css']
})
export class BanqueteComponent {
  // Propiedades iniciales actualizadas
  banquetes = [
    { id: 1, tipo: 'Formal', menu: 'Entrada, Plato Principal, Postre', cantidad_personas: 50, costo: 500000 },
    { id: 2, tipo: 'Casual', menu: 'Buffet', cantidad_personas: 80, costo: 350000 }
  ];

  // Métodos para la gestión de banquetes
  agregarBanquete() {
    console.log('Agregar nuevo banquete');
  }

  editarBanquete(banqueteId: number) {
    console.log(`Editar banquete con ID: ${banqueteId}`);
  }

  eliminarBanquete(banqueteId: number) {
    console.log(`Eliminar banquete con ID: ${banqueteId}`);
  }
}
