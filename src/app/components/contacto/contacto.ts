import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

interface InformacionContacto {
  label: string;
  valor: string;
  tipo: 'email' | 'telefono' | 'direccion' | 'web';
}

interface FormularioContacto {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss'
})
export class Contacto {

  // Estado del formulario
  formulario: FormularioContacto = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  };

  enviando: boolean = false;
  mensajeEnviado: boolean = false;
  errorEnvio: boolean = false;

  // Información de contacto
  informacionContacto: InformacionContacto[] = [
    {
      label: 'Email',
      valor: 'contacto@gestionterritorial.cl',
      tipo: 'email'
    },
    {
      label: 'Teléfono',
      valor: '+56 2 2345 6789',
      tipo: 'telefono'
    },
    {
      label: 'Dirección',
      valor: 'Santiago, Chile',
      tipo: 'direccion'
    },
    {
      label: 'Web',
      valor: 'www.gestionterritorial.cl',
      tipo: 'web'
    }
  ];

  constructor(
    private router: Router,
    private location: Location
  ) {}

  // Enviar mensaje del formulario
  async enviarMensaje(): Promise<void> {
    this.enviando = true;
    this.mensajeEnviado = false;
    this.errorEnvio = false;

    try {
      // Simular envío de email (aquí irías a tu backend)
      await this.simularEnvioEmail();
      
      this.mensajeEnviado = true;
      this.limpiarFormulario();
      
      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        this.mensajeEnviado = false;
      }, 5000);

    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      this.errorEnvio = true;
      
      // Ocultar mensaje de error después de 5 segundos
      setTimeout(() => {
        this.errorEnvio = false;
      }, 5000);
    } finally {
      this.enviando = false;
    }
  }

  // Simular envío de email (reemplazar con servicio real)
  private simularEnvioEmail(): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simular éxito en 90% de los casos
        if (Math.random() > 0.1) {
          console.log('Mensaje enviado:', this.formulario);
          resolve();
        } else {
          reject(new Error('Error simulado'));
        }
      }, 2000); // Simular delay de 2 segundos
    });
  }

  // Limpiar formulario después del envío exitoso
  private limpiarFormulario(): void {
    this.formulario = {
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    };
  }

  // Método para volver atrás
  volverAtras(): void {
    this.location.back();
  }

  // Método para navegar al inicio
  navegarAInicio(): void {
    this.router.navigate(['/']);
  }

  // Método para navegar a proyectos
  navegarAProyectos(): void {
    this.router.navigate(['/proyectos']);
  }

  // Método para navegar a oficina
  navegarAOficina(): void {
    this.router.navigate(['/oficina']);
  }

  // Validar email
  private validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validar teléfono chileno
  private validarTelefono(telefono: string): boolean {
    const telefonoRegex = /^(\+56|56)?[\s\-]?[2-9][\s\-]?\d{4}[\s\-]?\d{4}$/;
    return telefonoRegex.test(telefono.replace(/\s/g, ''));
  }

  // Método para formatear teléfono
  formatearTelefono(): void {
    let telefono = this.formulario.telefono.replace(/\D/g, '');
    
    if (telefono.startsWith('56')) {
      telefono = telefono.substring(2);
    }
    
    if (telefono.length === 9) {
      telefono = telefono.replace(/(\d{1})(\d{4})(\d{4})/, '+56 $1 $2 $3');
      this.formulario.telefono = telefono;
    }
  }

  // Método para validar formulario completo
  validarFormulario(): boolean {
    const { nombre, email, mensaje } = this.formulario;
    
    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
      return false;
    }
    
    if (!this.validarEmail(email)) {
      return false;
    }
    
    if (this.formulario.telefono && !this.validarTelefono(this.formulario.telefono)) {
      return false;
    }
    
    return true;
  }

  // Método helper para contar caracteres del mensaje
  contarCaracteres(): number {
    return this.formulario.mensaje.length;
  }

  // Método para limpiar mensajes de estado
  limpiarMensajes(): void {
    this.mensajeEnviado = false;
    this.errorEnvio = false;
  }
}