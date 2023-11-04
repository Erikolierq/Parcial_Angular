import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';
@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  cantidadVehiculos = new Map<string, number>();

  constructor(private vehiculoService: VehiculoService) { }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
    });
  }

  getVehiculosPorMarca() : void {
    let datos = new Map<string, number>();
    
    this.vehiculoService.getVehiculos().subscribe(vehiculos => {
    this.vehiculos = vehiculos;
    this.vehiculos.forEach(vehiculo => {
        if (!datos.has(vehiculo.marca)) {
          datos.set(vehiculo.marca,1);
        } else {
          let valor = datos.get(vehiculo.marca);
          if (valor !== undefined) {
            datos.set(vehiculo.marca, valor + 1);
          } else {
            datos.set(vehiculo.marca, 1);
          }
        }
      });
      this.cantidadVehiculos = datos
    });
  }
 
 
  ngOnInit() {
    this.getVehiculos();
    this.getVehiculosPorMarca();
  }


}
