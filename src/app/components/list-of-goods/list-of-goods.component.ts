import { Component } from '@angular/core';
import { Good } from '../../models/good';
import { GoodsService } from '../../services/goods.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-of-goods',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-of-goods.component.html',
  styleUrl: './list-of-goods.component.css'
})
export class ListOfGoodsComponent {
  public goods:Good[]=[];

 public constructor (private goodsService:GoodsService) {
  this.goodsService.loadData().subscribe((data)=>{
    for (let x in data) {
      this.goods.push(data[x])
      console.log(x);
    }
  })
  }
}
