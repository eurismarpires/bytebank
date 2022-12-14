import { NovaTranferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core'

export const routes: Routes = [
   {path: '', redirectTo: 'extrato', pathMatch: 'full'},
   {path: 'extrato',component: ExtratoComponent},
   {path: 'nova-transferencia',component: NovaTranferenciaComponent}
]

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule{

}
