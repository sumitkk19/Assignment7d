import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  constructor() { }

  ngOnInit() {
  }

  public str = "";


  public Upper() {
    this.str ="MARVELLOUS INFOSYSTEMS";
  }

  public Lower() {
    this.str = "Marvellous Infosystems";
  }

  public MarvellousEventInfo(value : any) {
    console.log(value);
  }
}
