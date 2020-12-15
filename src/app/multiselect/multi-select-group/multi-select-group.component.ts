import {
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
} from '@angular/core';
import { MultiSelectOptionComponent } from '../multi-select-option/multi-select-option.component';

@Component({
  selector: 'app-multi-select-group',
  templateUrl: './multi-select-group.component.html',
  styleUrls: ['./multi-select-group.component.scss'],
})
export class MultiSelectGroupComponent implements OnInit, AfterViewInit {
  @Input('value') value: string;
  @Input('level') level: number;
  @Input('checked') checked = false;
  @Output('checkedChange') onChange = new EventEmitter<boolean>();

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
    this.onChange.emit(this.checked);
    this.options.forEach((o) => o.toggleCheck(this.checked));
  }

  ngAfterViewInit() {
    this.options.forEach((o) => o.setLevel(this.level));
  }
}
