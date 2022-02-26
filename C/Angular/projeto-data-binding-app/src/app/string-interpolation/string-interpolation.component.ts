import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstname = "josue";
  name = {
    f1: "j",
    f2: "cas"
  }

  color: String = "accent"

  constructor() { }

  ngOnInit(): void {
  }

  click(){
    console.log("click")
  }

}
