import { Component, OnInit } from '@angular/core';
import { Educaciones } from "../../DB";

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educaciones = Educaciones ;

  constructor() { }

  ngOnInit(): void {
  }

}
