import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-loading-component',
  templateUrl: './loading-component.component.html',
  styleUrls: ['./loading-component.component.scss']
})
export class LoadingComponentComponent implements OnInit {
  @Input('loadingText')  loadingText: string;

  constructor() {}

  ngOnInit() {

  }

  createArrayFromText():string[] {
      return this.loadingText.split("");
  }

}
