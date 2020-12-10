import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

  @Input("title") title: string

  isOpen = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleOpen(){
    this.isOpen = !this.isOpen
  }

}
