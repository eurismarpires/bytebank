import { TransferenciaService } from './../services/transferencia.service';
import { Transferencia } from './../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { ResourceLoader } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTranferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransferenciaService, private router: Router) {}
  transferir(): void {
    console.log('Socilitar nova transferência');
    console.log('valor:', this.valor);
    console.log('destino:', this.destino);
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato')
      },
      (error) => console.error(error)
    );
    this.limparCampos();
  }
  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
