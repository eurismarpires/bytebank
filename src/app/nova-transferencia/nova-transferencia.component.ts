import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTranferenciaComponent {

  valor: number = 0;
  destino: number = 999;
  transferir(): void {
    console.log('Socilitar nova transferência');
    console.log('valor:', this.valor);
    console.log('destino:', this.destino);
  }
}
