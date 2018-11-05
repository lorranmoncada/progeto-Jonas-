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
  isShowMore: boolean;






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

    this.isShowMore = false;
  }

  showMoreInfo(isShowMore: any) {
    /*  isShowMore = isShowMore ? false : true; */

    if (this.isShowMore === false) {
      this.isShowMore = true;
    } else {
      this.isShowMore = false;
    }
  }
}
