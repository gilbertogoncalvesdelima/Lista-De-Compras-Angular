import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[];
  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
   // console.log('Instanciando dependências necessárias para o serviço.');

  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }
  criarItem(nomeDoItem: string){
    const id = this.listaDeCompra.length + 1
    const item : Item = {
      id: id,
      nome: nomeDoItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    }
    return item
  }
  adicionarItemNaLista(nomeDoItem: string){
    const item = this.criarItem(nomeDoItem)
    this.listaDeCompra.push(item);
    // this.atualizarLocalStorage();
  }
  editarItemDaLista(itemAntigo: Item, nomeEditadoDoItem: string){
    const itemEditado : Item = {
      id: itemAntigo.id,
      nome: nomeEditadoDoItem,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado
    }
    const id = itemAntigo.id;
    // Aqui itemos percorrer o array, pesquisar o item para aquela posição, iremos remover um item de acordo com aquela posição e substituir ele pelo o item editar
    this.listaDeCompra.splice(Number(id)-1, 1,
    itemEditado);
    // this.atualizarLocalStorage();
  }
  atualizarLocalStorage(){
    // Toda vez que eu chamar este metodo, ele ira jogar para o localStorage o array de lista de compra
    localStorage.setItem('itens', JSON.stringify(this.
    listaDeCompra));
  }
}
