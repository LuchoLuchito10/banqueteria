import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Para el manejo de formularios
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  salonId: string | null = null;
  salon: any = null; // Detalles del salón seleccionado
  

  // Datos del formulario
  nombre: string = '';
  email: string = '';
  telefono: string = '';
  fecha: string = '';
  asistentes: number | null = null;

  // Mensajes de error
  errorAsistentes: string = '';
  errorFecha: string = '';
  errorFormulario: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.salonId = params['salonId']; // Obtén el salonId de los parámetros
  
      // Validar si el ID es válido
      if (this.salonId) {
        const salonNombre = params['nombre'];
        const salonCapacidad = params['capacidad'];
  
        this.salon = {
          id: this.salonId,
          nombre: salonNombre,
          capacidad: +salonCapacidad // Convertir a número
        };
  
        console.log('Datos del salón seleccionado:', this.salon);
      } else {
        console.error('No se recibió un ID válido para el salón.');
      }
    });
  }
  

  // Método para simular la obtención de los detalles del salón
  obtenerDetallesSalon(salonId: string | null): any {
    const salones = [
      { id: '1', nombre: 'Salón Principal', capacidad: 200 },
      { id: '2', nombre: 'Salón Pequeño', capacidad: 50 },
      { id: '3', nombre: 'Salón Ejecutivo', capacidad: 100 },
      { id: '4', nombre: 'Salón Terraza', capacidad: 80 },
      { id: '5', nombre: 'Salón Cristal', capacidad: 150 },
      { id: '6', nombre: 'Salón Jardin', capacidad: 100 },
    ];
    return salones.find((salon) => salon.id === salonId) || null;
  }

  // Validar número de asistentes
  validarAsistentes(): boolean {
    if (!this.salon || !this.salon.capacidad) {
      this.errorAsistentes = 'No se ha configurado la capacidad del salón seleccionado.';
      return false;
    }
  
    if (this.asistentes === null || this.asistentes <= 0) {
      this.errorAsistentes = 'El número de asistentes debe ser mayor a 0.';
      return false;
    }
  
    if (this.asistentes > this.salon.capacidad) {
      this.errorAsistentes = `El número de asistentes no puede superar la capacidad del salón (${this.salon.capacidad} personas).`;
      return false;
    }
  
    this.errorAsistentes = '';
    return true;
  }
  

  // Validar fecha
  validarFecha(): boolean {
    const fechaSeleccionada = new Date(this.fecha);
    const fechaActual = new Date();
    // Comparar solo año, mes y día (ignorando la hora)
    if (fechaSeleccionada.setHours(0, 0, 0, 0) < fechaActual.setHours(0, 0, 0, 0)) {
      this.errorFecha = 'La fecha seleccionada no puede ser anterior a la fecha actual.';
      return false;
    }
    this.errorFecha = '';
    return true;
  }

  // Validar el formulario completo
  validarFormulario(): boolean {
    if (!this.nombre.trim()) {
      this.errorFormulario = 'El nombre es obligatorio.';
      return false;
    }
    if (!this.email.trim() || !this.email.includes('@')) {
      this.errorFormulario = 'El correo electrónico es obligatorio y debe ser válido.';
      return false;
    }
    if (!this.telefono.trim()) {
      this.errorFormulario = 'El teléfono es obligatorio.';
      return false;
    }
    if (!this.fecha) {
      this.errorFormulario = 'La fecha del evento es obligatoria.';
      return false;
    }
    if (this.asistentes === null || this.asistentes <= 0) {
      this.errorFormulario = 'El número de asistentes es obligatorio y debe ser mayor a 0.';
      return false;
    }
    this.errorFormulario = '';
    return true;
  }

  // Método para manejar la reserva
  reservar(): void {
    // Validar formulario
    const esFormularioValido = this.validarFormulario();
    const esValidoAsistentes = this.validarAsistentes();
    const esValidoFecha = this.validarFecha();

    if (!esFormularioValido || !esValidoAsistentes || !esValidoFecha) {
      alert('Por favor, corrige los errores antes de confirmar la reserva.');
      return;
    }

    // Si todo es válido, realizar la reserva
    const reservaData = {
      salonId: this.salonId,
      nombre: this.nombre.trim(),
      email: this.email.trim(),
      telefono: this.telefono.trim(),
      fecha: this.fecha,
      asistentes: this.asistentes,
    };

    console.log('Datos de la reserva:', reservaData);
    alert('Reserva confirmada. Nos pondremos en contacto contigo.');
  }
}
