import {
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { MultiSelectOptionComponent } from '../multi-select-option/multi-select-option.component';

@Component({
  selector: 'app-multi-select-group',
  templateUrl: './multi-select-group.component.html',
  styleUrls: ['./multi-select-group.component.scss'],
})
export class MultiSelectGroupComponent implements OnInit, AfterViewInit {
  @Input('title') title: string;
  @Input('level') level: number;
  checked = false;

  @ContentChildren(MultiSelectOptionComponent)
  options: QueryList<MultiSelectOptionComponent>;

  isOpen = false;

  constructor() {}

  ngOnInit(): void {}

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  toggleCheck($event: MouseEvent) {
    $event.stopPropagation();
    this.checked = !this.checked;
    this.options.forEach((o) => o.toggleCheck(this.checked));
  }

  ngAfterViewInit() {
    this.options.forEach((o) => o.setLevel(this.level));
  }
}
