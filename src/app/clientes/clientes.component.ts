import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ClientesModel } from './clientes.model';
import { ClientesserviceService } from './clientesservice.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  @ViewChild('Export', { read: ElementRef }) Export: ElementRef;

  listaClientes: ClientesModel[];
  pesquisar: string;
  /* isShowMore: boolean; */
  objCliente: ClientesModel;
  cadastroCliente: boolean;
  login: boolean;
  teste: boolean;

  constructor(private clientesService: ClientesserviceService) { }

  ngOnInit() {

    this.clientesService.getClientes().subscribe(data => {
      this.listaClientes = data;

      /* this.listaClientes = data; */


    });
    console.log(this.pesquisar);
    this.cadastroCliente = false;
    this.login = false;
    this.teste = false;
  }


  novoCliente() {
    this.objCliente = {
      idProcesso: null,
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

  editCliente(cliente) {
    this.objCliente = cliente;
    this.cadastroCliente = true;

  }


  excluirCliente(cliente) {
    this.objCliente = cliente;
    this.clientesService.DeletarPerspectiva(this.objCliente.idProcesso).subscribe(data => {
      console.log(data);
       });

  }

  deslogar() {
    this.login = true;
    this.teste = true;
  }
}
