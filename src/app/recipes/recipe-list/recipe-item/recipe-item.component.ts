import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Output() featuroSelected = new EventEmitter<void>();
  onSelecto() {
    this.featuroSelected.emit();
  }
  @Input() recipeBlub: Recipe;
  /* Item[] = [new Item('banana', 'blueberry')]; */
  constructor() {}

  ngOnInit() {}
}
