import { ClientesModel } from './../clientes.model';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/core/src/util';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ClientesserviceService } from '../clientesservice.service';

@Component({
  selector: 'app-cad-clientes',
  templateUrl: './cad-clientes.component.html',
  styleUrls: ['./cad-clientes.component.css']
})
export class CadClientesComponent implements OnInit {


  formulario: FormGroup;
  cadastro: boolean;
  reusultado: number;

  @Input() cadClientes: ClientesModel;


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private clientesService: ClientesserviceService) { }

  ngOnInit() {

    this.createForm();
    console.log(this.cadClientes.processo);

  }

  onSubmit(formulario) {
    if (this.cadClientes.idProcesso) {
      this.clientesService.editarCliente(formulario.value).subscribe(data => {
        console.log(data);
      });
    } else {
      this.clientesService.cadastrarCliente(formulario.value).subscribe(data => {
        console.log(data);
      });
    }

    /*  this.resetar(); */
  }


  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  aplicarCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }
  voltarPagina() {
    this.cadastro = true;
  }



  createForm() {
    this.formulario = this.formBuilder.group({
      processo: [this.cadClientes.processo, Validators.required],
      reclamante: [this.cadClientes.reclamante, Validators.required],
      reclamada: [this.cadClientes.reclamada, Validators.required],
      valor: [this.cadClientes.valor, Validators.required],
      parcelas: [this.cadClientes.parcelas, Validators.required],
      vencimento: [this.cadClientes.vencimento, Validators.required],
      tipo: [this.cadClientes.tipo, Validators.required],
      status: [this.cadClientes.status, Validators.required]
    });
  }



}





