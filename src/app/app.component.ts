import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  destino: number = 0;
  valor: number = 0;

  transferir($event: any){
    this.valor = $event.valor;
    this.destino = $event.destino;
  }
}

