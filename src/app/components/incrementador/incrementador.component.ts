import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {


  @Input("nombre") leyenda: String = 'Leyendaaaaaa';

  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { 

   
  }

  ngOnInit() {

    
  }

  
  cambiarValor( valor ){

    if(this.progreso >= 100){
     this.progreso = 95;
    }else{
      this.progreso = this.progreso + valor;
    }

    if(this.progreso <= 0 ){
     this.progreso = 0;
    }else{
      this.progreso = this.progreso + valor;
    }

    this.cambioValor.emit( this.progreso );

  }


  moviminetoInput( nuevoValor: number){

    if(nuevoValor >= 100){

      this.progreso = 100;

    }else if(nuevoValor <= 0){

      this.progreso = 0;

    }else{

      this.progreso = nuevoValor;
    }

    this.cambioValor.emit( this.progreso );

  }


}
