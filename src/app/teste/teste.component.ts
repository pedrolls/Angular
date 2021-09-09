import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  showTitle = true;
  public items = [
    {description: 'item 1', id: 1},
    {description: 'item 2', id: 2},
    {description: 'item 3', id: 3},
    {description: 'item 4', id: 4}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  public changeTitleDisplayStatus(){
    this.showTitle ? this.showTitle = false : this.showTitle  = true;
  }

}
