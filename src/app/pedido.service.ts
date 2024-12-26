import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  crearPedido(volumen: number, precio: number): any {
    const fecha = new Date();
    return {
      numeroPedido: this.generarNumeroPedido(),
      volumen,
      precio,
      fecha: fecha.toLocaleDateString(),
      hora: fecha.toLocaleTimeString()
    };
  }

  private generarNumeroPedido(): string {
    return Math.floor(Math.random() * 1000000).toString();
  }
}
