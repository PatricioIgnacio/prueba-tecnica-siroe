import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CotizadorService {
  calcularPrecio(volumen: number): number {
    const tarifa = 2000;  // Tarifa por cada 20 cm³
    const volumenEnUnidad = volumen / 20;
    return volumenEnUnidad * tarifa;
  }
}
