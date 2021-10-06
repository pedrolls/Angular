import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../_models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource!: Category[];

  constructor() { }

  ngOnInit(): void {
  }

  public editCategory(category: Category){

  }

  public deleteCategory(categoria: Category){

  }
}
