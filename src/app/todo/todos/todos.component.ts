import { Component, OnInit, Type } from '@angular/core';

type TodosComponentProps = {
  id : number,
  name : string
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent {  
  constructor() { }

  title : string = 'TodoList Angular';
  list : Array<TodosComponentProps> = [];

  addTask(item:string){
      this.list.push({id : this.list.length, name : item});
      console.log("item", this.list);
  }

  removeTask(id:number){
      this.list = this.list.filter(item => item.id !== id);
      console.log(this.list);
  }

}
