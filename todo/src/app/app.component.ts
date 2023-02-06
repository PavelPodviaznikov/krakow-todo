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
    this.AppService.getItems()
      .subscribe((response: any) => {
        this.items = response.items;
      });
  }

  onCreateItemClick(item: IItem) {
    if(!item.value) {
      return ;
    }

    const newItem = {...item, id: `id${this.items.length + 1}`};

    this.AppService.createItem(newItem)
      .subscribe(() => {
        this.items.push(newItem);

        this.newItem.value = "";
        this.newItem.id = "";
      });
  }

  onItemDeleteClick(index: number) {
    this.items.splice(index, 1);
  }
}
