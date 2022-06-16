import { Component, OnInit } from '@angular/core';
import { Proyectos } from "../../DB";

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos = Proyectos ;

  constructor() { }

  ngOnInit(): void {
  }

}
