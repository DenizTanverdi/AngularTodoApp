import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { callbackify } from 'util';
import { Key } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  data={
    bekleyenler: [
        'Get to work',
        'Pick up groceries',
        'Go home',
        'Fall asleep'],
        yapim:[
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog'],
        bitenler:[
        'Deniz',
        'Tanrıverdi',
        'Galatasaray'
        ]
      }
  constructor() { 

    this.setItems();
  }

  ngOnInit() {
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        Object.keys(this.data).forEach((key)=>{
                   
                          localStorage.setItem(key,JSON.stringify(this.data[key]));
                        });
    }
  }
  addTodo(todo){

this.data.bekleyenler.push(todo.value);
todo.value="";
localStorage.setItem('bekleyenler',JSON.stringify(this.data.bekleyenler));
  }
  setItems(){
   
Object.keys(this.data).forEach((key)=>{
  console.log(key);
 if(!(localStorage.getItem(key))){

  localStorage.setItem(key,JSON.stringify(this.data[key]));

}
 else{


  this.data[key]=JSON.parse(localStorage.getItem(key));


 }

});

  
  }

  

}
