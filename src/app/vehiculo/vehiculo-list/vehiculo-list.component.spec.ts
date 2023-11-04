/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoListComponent } from './vehiculo-list.component';

describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehiculoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the table with 3 more rows', () => {
    component.vehiculos = [
      { id: 4, marca: 'Ferrari', linea: 'f430 spider' , modelo: 2006, kilometraje: 5000, referencia: 'super', color: 'rojo', imagen: 'ferrari.jpg' },
      { id: 5, marca: 'Lamborghini', linea: 'veneno' , modelo: 2013, kilometraje: 3000, referencia: 'super', color: 'gris', imagen: 'lambo.jpg' },
      { id: 6, marca: 'koenigsegg', linea: 'regera' , modelo: 2016, kilometraje: 12000, referencia: 'super', color: 'blanco', imagen: 'koenig.jpg' }
    ];
    fixture.detectChanges();
    var table = fixture.nativeElement.querySelector('table');
    expect(table).toBeTruthy();
    var row = table.querySelectorAll('tr');
    expect(row.length).toBe(4); 
  });
});
