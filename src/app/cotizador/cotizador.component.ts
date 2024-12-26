import { Component } from '@angular/core';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.scss']
})
export class CotizadorComponent {
  largo: number = 0;
  ancho: number = 0;
  alto: number = 0;
  volumen: number = 0;
  precio: number = 0;
  mensajeError: string = ''; // Mensaje de error
  pedidoCreado: boolean = false;
  pedido: any = null;

  // Método para calcular el volumen
  calcularVolumen() {
    this.volumen = this.largo * this.ancho * this.alto;

    if (this.volumen > 2000000) { // 2m³ = 2000000 cm³
      this.mensajeError = 'El volumen excede el límite de 2m³. Necesita operar con un ejecutivo.';
      this.volumen = 0;  // Reiniciar volumen en caso de error
      this.precio = 0;   // Reiniciar precio en caso de error
      return;
    }

    this.precio = (this.volumen / 20) * 2000; // Precio según volumen
    this.mensajeError = ''; // Limpiar mensaje de error
  }

  // Método para procesar el pedido
  procesarPedido() {
    const pedidoId = Math.floor(Math.random() * 1000000);
    const fecha = new Date();
    this.pedido = {
      id: pedidoId,
      volumen: this.volumen,
      precio: this.precio,
      fecha: `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`,
      hora: `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
    };
    this.pedidoCreado = true;
  }

  // Método para reiniciar el formulario
  reiniciarFormulario() {
    this.largo = 0;
    this.ancho = 0;
    this.alto = 0;
    this.volumen = 0;
    this.precio = 0;
    this.mensajeError = '';  // Limpiar el mensaje de error
    this.pedidoCreado = false;
    this.pedido = null;
  }
}
