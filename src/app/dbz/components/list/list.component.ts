import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dbz-list',

  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  /* onDeleteId(index: number): void {
    this.onDelete.emit(index)
  } */

  onDeleteById(id?: string): void {
    if (!id) return;
    this.onDelete.emit(id)
  }

  onDeleteCharacter(index: number): void {
    console.log({ index });
  }
}
