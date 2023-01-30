import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';

  items = [
    { id: "id1", value: "first item", checked: false },
    { id: "id2", value: "second item", checked: false },
    { id: "id3", value: "third item", checked: false },
  ];

  newItem = {
    id: "",
    value: "",
    checked: false
  };
}
