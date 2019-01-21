import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  leyenda: String = 'Leyendaaaaaa';
  progreso: number = 50;

  constructor() { }

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

  }

}
