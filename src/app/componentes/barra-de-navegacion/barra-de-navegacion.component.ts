import { Component, ViewChild , ElementRef , AfterViewInit , HostListener, Renderer2 } from '@angular/core';

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

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
  }

  //escucha el evento scroll y llama a la funcion de abajo
  @HostListener("window:scroll",['$event']) 
  mostrarScroll(): void{
    this.distanciaTopBarra = this.barraDeNavegacion.nativeElement.getBoundingClientRect().top;
    if(this.distanciaTopBarra == 0){
      this.renderer.setStyle(this.barraDeNavegacion.nativeElement,"transition","1s");
      this.renderer.setStyle(this.barraDeNavegacion.nativeElement,"opacity",1);
      // this.renderer.setStyle(this.barraDeNavegacion.nativeElement,"height","40px");
    }
    else{
      this.renderer.setStyle(this.barraDeNavegacion.nativeElement,"transition","0.3s");
      this.renderer.setStyle(this.barraDeNavegacion.nativeElement,"opacity",0);
      // this.renderer.setStyle(this.barraDeNavegacion.nativeElement,"height","0");
    }
  }
}
