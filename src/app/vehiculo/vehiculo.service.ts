import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { Vehiculo } from './vehiculo';
@Injectable({
    providedIn: 'root'
})
export class VehiculoService {
private apiUrl: string = environment.baseUrl;
constructor(private http: HttpClient) { }

getVehiculos(): Observable<Vehiculo[]> {
return this.http.get<Vehiculo[]>(this.apiUrl);
}

getVehiculosPorMarca(): Observable<any> {
    return this.getVehiculos().pipe(
      map(vehiculos => {
        var vehiculosPorMarca: any = {} ;
        vehiculos.forEach(vehiculo => {
          if (!vehiculosPorMarca[vehiculo.marca]) {
            vehiculosPorMarca[vehiculo.marca] = 0;
          }
          vehiculosPorMarca[vehiculo.marca]++;
        });
        return vehiculosPorMarca;
      })
    );
  }
  
}
