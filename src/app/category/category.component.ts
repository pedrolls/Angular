import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Category } from '../_models/category';

export const CATEGORY_DATA = [
  { name: 'Educação', guid: 'aaa-bbb-ccc-dddd'},
  { name: 'Saúde', guid: 'aaa-bbb-ccc-dddd'},
  { name: 'Trabalho', guid: 'aaa-bbb-ccc-dddd'},
  { name: 'Outros', guid: 'aaa-bbb-ccc-dddd'}
]

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource: Category[] = CATEGORY_DATA;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public editCategory(category: Category){
    console.log("editou uma nova categoria.")
  }

  public deleteCategory(categoria: Category){
    this.dialog.open(DialogComponent, {disableClose: true, data: {dialogMsg: 'Você tem certeza que gostaria de apagar a categoria?',
    leftButtonLabel: 'Cancelar', rightButtonLabel: 'Sim'}}).afterClosed().subscribe(
      resp =>{
        if(resp)
          console.log("Categoria apagada com sucesso!")
        else
          console.log("Categoria não apagada!")
      }
    )
  }

  public createNewCategory(){
    console.log("criou uma nova categoria.")
  }
}
