import { Component, ViewChild , ElementRef , AfterViewInit , HostListener } from '@angular/core';

@Component({
  selector: 'app-barra-de-navegacion',
  templateUrl: './barra-de-navegacion.component.html',
  styleUrls: ['./barra-de-navegacion.component.css']
})

//
export class BarraDeNavegacionComponent implements AfterViewInit {

  @ViewChild("bdn") barraDeNavegacion !: ElementRef; // el ! es para evitar inicializarlo obligatoriamente
  distanciaTopBarra: number = 0;
  // scrollTop: number = 0 ;
  // barraDeNavegacion2 = document.getElementById('bdn');

  constructor() { }

  ngAfterViewInit(): void {
  }

  //escucha el evento scroll y llama a la funcion de abajo
  @HostListener("window:scroll",['$event']) 
  mostrarScroll(): void{
    this.distanciaTopBarra = this.barraDeNavegacion.nativeElement.getBoundingClientRect().top;
    if(this.distanciaTopBarra == 0){
      this.barraDeNavegacion.nativeElement.style.transition = "1s"; 
      this.barraDeNavegacion.nativeElement.style.opacity = 1;
    }
    else{
      this.barraDeNavegacion.nativeElement.style.transition = "0.3s"; 
      this.barraDeNavegacion.nativeElement.style.opacity = 0;
    }
  }
}
