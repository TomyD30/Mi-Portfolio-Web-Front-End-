import { Component, OnInit } from '@angular/core';
import { Habilidades } from "../../DB";

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades = Habilidades;

  constructor() { }

  ngOnInit(): void {
  }

}
