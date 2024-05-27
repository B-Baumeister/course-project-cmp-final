import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  openDropdown = false;
  ngOnInit() {}
}
