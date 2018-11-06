import { PipeTransform, Pipe } from '@angular/core';
import { ClientesModel } from '../clientes/clientes.model';

@Pipe({
    name: 'pesquisarFilter'
  })
export class PesquisarFilterPipe implements PipeTransform {
    transform(nome: ClientesModel[], pesquisar: string): ClientesModel[] {
        if (!nome || !pesquisar) {
          return nome;
        }

        return nome.filter(objVideo =>
            objVideo.processo.indexOf(pesquisar.toUpperCase()) >= 0);
    }


}
