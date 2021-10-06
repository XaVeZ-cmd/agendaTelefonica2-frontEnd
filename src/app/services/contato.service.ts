import { Contato } from './../models/contato';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  baseUrl: String = environment.baseUrl;

  //método httpClient para conexão com o back
  constructor(private http: HttpClient) { }

  //Observable: quando chamado o findAll o Observable vai verifica-o e passa o baseUrl + contatos para url, que é retornada com o método get do httpClient
  findAll(): Observable<Contato[]>{
    const url = this.baseUrl + "/contatos";
    return this.http.get<Contato[]>(url);
  }
}
