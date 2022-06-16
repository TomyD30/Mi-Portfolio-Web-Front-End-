import { Component, OnInit } from '@angular/core';
import { ExperienciasLaborales } from "../../DB";

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  experiencias = ExperienciasLaborales;

  constructor() { }

  ngOnInit(): void {
  }

}
