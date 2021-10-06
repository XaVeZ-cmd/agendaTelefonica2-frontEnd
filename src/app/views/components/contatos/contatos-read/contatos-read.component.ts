import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Contato } from 'src/app/models/contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-contatos-read',
  templateUrl: './contatos-read.component.html',
  styleUrls: ['./contatos-read.component.css']
})
export class ContatosReadComponent implements AfterViewInit {

  //intancia um contato do tipo contato com array vazio
  contatos: Contato[] = [];

  displayedColumns: string[] = ['id', 'nome', 'email', 'telefone'];
  //dataSource vai ser um tipo contato
  dataSource = new MatTableDataSource<Contato>(this.contatos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  //construtor do service
  constructor(private service : ContatoService){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.findAll();
  }


  findAll():void{
    this.service.findAll().subscribe((resposta) => {
      this.contatos = resposta;
      console.log(this.contatos);
    });
  }

}
