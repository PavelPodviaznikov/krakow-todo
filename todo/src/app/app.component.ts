import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

interface IItem {
  id: string;
  value: string;
  checked: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: Array<IItem> = [];

  title = 'todo';

  newItem = {
    id: "",
    value: "",
    checked: false
  };

  constructor(
    private AppService: AppService
  ) {}

  ngOnInit(): void {
    this.items = this.AppService.getItems();
  }

  onCreateItemClick(item: IItem) {
    if(!item.value) {
      return ;
    }

    this.items.splice(0, 0, {...item, id: `id${this.items.length}`});

    this.newItem.value = "";
    this.newItem.id = "";
  }

  onItemDeleteClick(index: number) {
    this.items.splice(index, 1);
  }
}
