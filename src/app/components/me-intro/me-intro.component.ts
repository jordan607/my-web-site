import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me-intro',
  templateUrl: './me-intro.component.html',
  styleUrls: ['./me-intro.component.css']
})
export class MeIntroComponent implements OnInit {

  name: string = "Vishal";
  job: string = "programmer";
  constructor() { }

  ngOnInit(): void {
  }

}
