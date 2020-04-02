import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  name: string="Internshala";
  showGoogleButton: boolean = false;


  people: any[]=[{
    "name":"Bob",
    "age":21,
    "country":"AUS"},
    {"name":"Sam",
    "age":20,
    "country":"UK"
  }]


  constructor() { }
toggleGoogleButton(){
  this.showGoogleButton= !this.showGoogleButton;
}
shouldDisplay(){
  if(this.name=="Internshala"){
return true;

  }else{
    return false;
  }
}



  ngOnInit() {
  }
onPersonClicked(){
  console.log("Person was Clicked");
}
}