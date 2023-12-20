import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {

  // Input está na frente da minha propriedade, o Input ira receber uma informação externa, que está vindo do elemento pai
  @Input() item!: Item;

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {
    console.log('OnInit')
   }
  ngOnChanges(){
    console.log('OnChanges')
  }
}
