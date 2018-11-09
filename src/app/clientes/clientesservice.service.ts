import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientesModel } from './clientes.model';

@Injectable()
export class ClientesserviceService {

  constructor(private client: HttpClient) { }

  public getClientes(): Observable<Array<ClientesModel>> {
    return this.client.get<Array<ClientesModel>>('http://localhost:60409/api/clientes/ListarClientes');
  }

  public cadastrarCliente(clientes: ClientesModel): Observable<boolean> {
    return this.client.post<boolean>('http://localhost:60409/api/clientes/CadastrarCliente', clientes);
  }

  public editarCliente(clientes: ClientesModel): Observable<boolean> {
    return this.client.post<boolean>('http://localhost:60409/api/clientes/AlterarCliente', clientes);
  }

  public DeletarPerspectiva(processo: number): Observable<boolean> {
    return this.client.delete<boolean>(`http://localhost:60409/api/clientes/ExcluirCliente/${processo}`);
  }
}
