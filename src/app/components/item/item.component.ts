import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements
  OnInit,
  OnChanges,
  OnDestroy
  {

  // Input está na frente da minha propriedade, o Input ira receber uma informação externa, que está vindo do elemento pai
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();


  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {
    console.log('OnInit')
   }
  ngOnChanges(){
    console.log('OnChanges')
  }
  editarItem(){
  this.emitindoItemParaEditar.emit(this.item);
  }
  deletarItem(){
  console.log('Estão tentando me cala.')
   this.emitindoIdParaDeletar.emit(this.item.id);
  }
  ngOnDestroy(){
    console.log('Conseguiram me calar')
  }
}
