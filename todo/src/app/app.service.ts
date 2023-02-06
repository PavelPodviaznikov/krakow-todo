import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  createItem() {}

  deleteItem() {}

  checkItem() {}

  getItems() {
    return [
      { id: "id1", value: "first item", checked: false },
      { id: "id2", value: "second item", checked: false },
      { id: "id3", value: "third item", checked: false },
    ];
  }
}