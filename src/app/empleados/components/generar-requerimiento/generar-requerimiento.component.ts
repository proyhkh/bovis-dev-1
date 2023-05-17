import { Component, OnInit } from '@angular/core';

interface Requerimiento {
  profesion:    string,
  sueldo:       RangoSueldo,
  habilidades:  string[],
  experiencias: string[]
}

interface RangoSueldo {
  min: number,
  max: number
}

interface Opcion {
  name: string,
  code: string
}

@Component({
  selector: 'app-generar-requerimiento',
  templateUrl: './generar-requerimiento.component.html',
  styleUrls: ['./generar-requerimiento.component.css']
})
export class GenerarRequerimientoComponent implements OnInit {

  requerimiento: Requerimiento = {
    profesion:    '',
    sueldo:       {
      min: 0.00,
      max: 1000.00
    },
    habilidades:  [],
    experiencias: []
  }

  habilidadesDisponibles: Opcion[] = [
    {name: 'Habilidad 1', code: 'H1'},
    {name: 'Habilidad 2', code: 'H2'},
    {name: 'Habilidad 3', code: 'H3'}
  ]

  experienciasDisponibles: Opcion[] = [
    {name: 'Experiencia 1', code: 'E1'},
    {name: 'Experiencia 2', code: 'E2'},
    {name: 'Experiencia 3', code: 'E3'}
  ]

  constructor() { }

  ngOnInit(): void { }

  guardar() {}

}
