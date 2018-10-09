import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientesModel } from './clientes.model';

@Injectable()
export class ClientesserviceService {

  constructor(private client: HttpClient) { }

    getClientes(): Observable<Array<ClientesModel>> {
      return this.client.get<Array<ClientesModel>>('./assets/data/juridico.json');
  }
}
