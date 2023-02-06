import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(
    private http: HttpClient
  ) {

  }

  createItem(item: any) {
    return this.http.post("http://localhost:4100/item", { item });
  }

  deleteItem() {}

  checkItem() {}

  getItems() {
    return this.http.get("http://localhost:4100/items");
  }
}