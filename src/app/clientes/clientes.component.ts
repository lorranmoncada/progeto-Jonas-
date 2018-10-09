import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientesModel } from './clientes.model';
import { ClientesserviceService } from './clientesservice.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { stringify } from '@angular/core/src/util';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  listaClientes: ClientesModel[];
  pesquisar: string;
  formulario: FormGroup;




  constructor(private clientesService: ClientesserviceService, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.clientesService.getClientes().subscribe(data => {
      this.listaClientes = data; this.listaClientes = data;


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

this.formulario = this.formBuilder.group({
  processo: [null, Validators.required],
  reclamante: [null, Validators.required],
  reclamada: [null, Validators.required],
  valor: [null, Validators.required],
  nparcelas: [null, Validators.required],
  parcelas: [null, Validators.required],
  vencimento: [null, Validators.required],
  select: [null, Validators.required],
  select2: [null, Validators.required]
});



  }


  onSubmit(formulario) {
    this.http.post('https://httpbin.org/post',  formulario.value).subscribe(dados => {
      console.log(formulario); }, (error: any) => alert('erro'));

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


}



