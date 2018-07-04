import { Component, OnInit } from '@angular/core';

import '@polymer/paper-checkbox';
import '@polymer/paper-input/paper-input.js';

@Component({
  templateUrl: './fiddle-content.component.html'
})
export class FiddleContentComponent implements OnInit {
  value: string;
  checked: boolean;

  constructor() {}

  ngOnInit() {}
}
