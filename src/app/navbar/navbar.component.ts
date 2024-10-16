import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CategoryService} from '../services/category.service';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ShareDataService} from '../services/share-data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    FormsModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  categories: any[] = [];
  selectedCategory!:string;
  keyword!:string;
  constructor(private categoryService: CategoryService,private shareDataService:ShareDataService) {}
  ngOnInit(): void {
      this.categoryService.getAllCategories().subscribe((data:any)=>{
        this.categories=data;
      },error=>{
        console.log(error);
        console.log(this.categories);
      })

  }

  onSelectCategory(category: string) {
    this.shareDataService.setSelectedCategory(category);
  }

  search(){
    this.shareDataService.setSearchKeyword(this.keyword);
  }


}




