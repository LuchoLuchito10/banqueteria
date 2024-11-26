import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalonService } from '../services/salon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {
  // Lista inicial de salones
  salones = [
    {
      id: 1,
      nombre: 'Salón Principal',
      capacidad: 200,
      ubicacion: 'Centro de la Ciudad',
      descripcion: 'Un amplio salón ideal para grandes eventos.',
      imagen: 'https://via.placeholder.com/300x200',
      disponibilidad: true,
    },
    {
      id: 2,
      nombre: 'Salón Pequeño',
      capacidad: 50,
      ubicacion: 'Suburbios',
      descripcion: 'Ideal para reuniones pequeñas y privadas.',
      imagen: 'https://via.placeholder.com/300x200',
      disponibilidad: true,
    },
    {
      id: 3,
      nombre: 'Salón Ejecutivo',
      capacidad: 100,
      ubicacion: 'Zona Financiera',
      descripcion: 'Moderno y elegante, ideal para eventos corporativos.',
      imagen: 'https://via.placeholder.com/300x200',
      disponibilidad: true,
    },
    {
      id: 4,
      nombre: 'Salón Terraza',
      capacidad: 80,
      ubicacion: 'Vista al Mar',
      descripcion: 'Un salón con terraza ideal para eventos al aire libre.',
      imagen: 'https://media.istockphoto.com/id/599133022/es/foto/sal%C3%B3n-para-bodas.jpg?s=1024x1024&w=is&k=20&c=1snQzYoh56nkL6JCISMzPTkn9dflbfQjFyFilMnyqmk=',
      disponibilidad: true,
    },
    {
      id: 5,
      nombre: 'Salón Cristal',
      capacidad: 150,
      ubicacion: 'Hotel Central',
      descripcion: 'Espacioso y elegante, con paredes de cristal.',
      imagen: 'https://media.istockphoto.com/id/1034038954/es/foto/las-personas-de-negocios-que-asisten-a-una-conferencia.jpg?s=1024x1024&w=is&k=20&c=XGo-a147sLHFQEDzy5j6PQQBgAiW0eOExKlRb73TrPw=',
      disponibilidad: true,
    },

    {
      id: 6,
      nombre: 'Salón Jardín',
      capacidad: 100,
      ubicacion: 'Zona Norte',
      descripcion: 'Un hermoso salón rodeado de jardines.',
      imagen: 'https://media.istockphoto.com/id/1335722064/es/foto/carpa-de-bodas-al-aire-libre.jpg?s=1024x1024&w=is&k=20&c=7dBb6RYiL0xRAUCScWWN-81BZvlAx3I1CLRwbbKVGmo=',
      disponibilidad: true,
    },

  ];


  errorMessage: string = '';

  constructor(private salonService: SalonService, private router: Router) {}

  ngOnInit(): void {
    this.salonService.getSalones().subscribe(
      (data) => {
        this.salones = data; // Almacenar los salones recibidos
      },
      (error) => {
        this.errorMessage = 'Error al cargar los salones.';
        console.error(error);
      }
    );
  }

  seleccionarSalon(salones: any): void {
    this.router.navigate(['/reserva'], { 
      queryParams: { 
        salonId: salones.id, 
        nombre: salones.nombre, 
        capacidad: salones.capacidad 
      } 
    });
  }
  
}


