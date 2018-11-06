import { ClientesModel } from './../clientes.model';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/core/src/util';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cad-clientes',
  templateUrl: './cad-clientes.component.html',
  styleUrls: ['./cad-clientes.component.css']
})
export class CadClientesComponent implements OnInit {


  formulario: FormGroup;
  cadastro: boolean;
  @Input() cadClientes: ClientesModel;


  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      processo: [null, Validators.required],
      reclamante: [null, Validators.required],
      reclamada: [null, Validators.required],
      valor: [null, Validators.required],
      nparcelas: [null, Validators.required],
    /*   parcelas: [null, Validators.required], */
      vencimento: [null, Validators.required],
      select: [0, Validators.required],
      select2: [0, Validators.required]
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
  voltarPagina() {
this.cadastro = true;
  }

}





