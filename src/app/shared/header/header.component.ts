import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public optionButton : any;

  constructor() { }

  ngOnInit() {
    // this.optionButton = 1
    // this.selectItem(1)
    this.getOptionLocalStorage()
  }
  getOptionLocalStorage(){
    this.optionButton = localStorage.getItem('option')
  }

  selectItem(value){
    console.log('entro');
    localStorage.setItem('option',value);
    this.optionButton = localStorage.getItem('option')
    console.log(this.optionButton);
    
  }


}
