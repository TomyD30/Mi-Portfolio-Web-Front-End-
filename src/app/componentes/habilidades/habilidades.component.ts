import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { Habilidades } from "../../DB";

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit , AfterViewInit {

  @ViewChildren("imagen") imagenHabilidad !: QueryList<ElementRef>;

  habilidades = Habilidades;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.invertirColor();
  }

  invertirColor(){
    let contador: number = 0;
    let distanciaIzq: number = 0;
    let distanciaDer: number = 0;
    let anchoPagina: number = document.documentElement.scrollWidth;
    for(let imagen of this.imagenHabilidad){
      distanciaIzq = imagen.nativeElement.getBoundingClientRect().left;
      distanciaDer = anchoPagina - imagen.nativeElement.getBoundingClientRect().right;
      if(distanciaDer < distanciaIzq){
        this.renderer.setAttribute(imagen.nativeElement,"src","../../../assets/estrellaNaranja.png");
        this.renderer.setStyle(imagen.nativeElement,"filter","brightness(" + this.habilidades[contador].nivel + ")");     
        // imagen.nativeElement.style.filter = "invert()" + " brightness(" + this.habilidades[contador].nivel + ")";
      }
      else if(distanciaDer == distanciaIzq){
        this.renderer.setAttribute(imagen.nativeElement,"src","../../../assets/estrellaSepia.png");
        this.renderer.setStyle(imagen.nativeElement,"filter","brightness(" + this.habilidades[contador].nivel + ")");     
        // imagen.nativeElement.style.filter = "sepia()" + " brightness(" + this.habilidades[contador].nivel + ")";
      }
      else{
        this.renderer.setStyle(imagen.nativeElement,"filter","brightness(" + this.habilidades[contador].nivel + ")");     
        // imagen.nativeElement.style.filter = "brightness(" + this.habilidades[contador].nivel + ")"; 
      }
      // El brightness antes lo usaba como estilo en linea con [ngStyle]
      //puedo seguir haciendolo como antes buscando imagenes de distinto color
      contador++;
    }
  }

}
