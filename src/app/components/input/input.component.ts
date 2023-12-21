import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemQueVaiSerEditado!: Item;

  valorItem! : string;
  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void { }

  adicionarItem(){
    this.listaService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }
  limparCampo(){
  this.valorItem = '';
  }
  ngOnChanges(changes: SimpleChanges){
    // Recursos no changes, correntValue: valor atual desta propriedade
    // firstChange, valor inicial da minha propriedade
    // isFirstChange, é o metodo que retorno booleano, se minha propriedade está com o valor que ela começou
    // previous, carrega o valor anterior da minha propriedade
  // console.log(changes['itemQueVaiSerEditado'].currentValue)
  if(!changes['itemQueVaiSerEditado'].firstChange){
    this.valorItem = this.itemQueVaiSerEditado?.nome;
  }
  }
}
