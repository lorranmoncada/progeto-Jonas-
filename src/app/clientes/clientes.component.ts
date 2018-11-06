import { Component, OnInit } from '@angular/core';
import { ClientesModel } from './clientes.model';
import { ClientesserviceService } from './clientesservice.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  listaClientes: ClientesModel[];
  pesquisar: string;
  /* isShowMore: boolean; */
  objCliente: ClientesModel;
  cadastroCliente: boolean;

  constructor(private clientesService: ClientesserviceService) { }

  ngOnInit() {
    this.clientesService.getClientes().subscribe(data => {
      this.listaClientes = data;
      this.listaClientes = data;


    });
    /* this.formulario = new FormGroup({
      processo: new FormControl(null),
      reclamante: new FormControl(null),
      reclamada: new FormControl(null),
      valor: new FormControl(null),
      nparcelas: new FormControl(null),
      parcelas: new FormControl(null),
      vencimento: new FormControl(null)
    }); */

    /* this.isShowMore = false; */
    this.cadastroCliente = false;
  }
/*
  showMoreInfo(isShowMore: any) {
    isShowMore = isShowMore ? false : true;

    if (this.isShowMore === false) {
      this.isShowMore = true;
    } else {
      this.isShowMore = false;
    }
  }
 */

  novoCliente() {
    this.objCliente = {
      processo: null,
      reclamante: null,
      reclamada: null,
      valor: 0,
      parcelado: 0,
      parcelas: 0,
      vencimento: null,
      status: null,
      tipo: null
    };
    this.cadastroCliente = true;
  }
}
