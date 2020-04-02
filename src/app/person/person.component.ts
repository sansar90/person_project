import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input('person')person:any;
  @Output('personClicked')personClicked= new EventEmitter;

  constructor() { }
getTextSize(person){
  if(person.country=="IN"){
    return 24;
  }else{
    return 34;
  }
}
  ngOnInit() {
    console.log(this.person);
  }
  OnClick(){
    this.personClicked.emit();
   
  }

}