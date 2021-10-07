import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  public editCategory(category: Category){
    console.log("editou uma nova categoria.")
  }

  public deleteCategory(categoria: Category){
    console.log("deletou uma nova categoria.")
  }

  public createNewCategory(){
    console.log("criou uma nova categoria.")
  }
}
