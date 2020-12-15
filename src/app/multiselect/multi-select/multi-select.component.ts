import {
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { stringify } from 'querystring';
import { MultiSelectGroupComponent } from '../multi-select-group/multi-select-group.component';
import { MultiSelectOptionComponent } from '../multi-select-option/multi-select-option.component';
@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
})
export class MultiSelectComponent implements OnInit, AfterViewInit {
  @Input('title') title: string;

  @ContentChildren(MultiSelectOptionComponent)
  options: QueryList<MultiSelectOptionComponent>;

  @ContentChildren(MultiSelectGroupComponent)
  groups: QueryList<MultiSelectGroupComponent>;

  isOpen = false;

  constructor() {}

  ngOnInit(): void {}

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  ngAfterViewInit() {
    this.options.forEach((o) =>
      o.onChange.subscribe((e) => this.valueChanged())
    );

    this.groups.forEach((o) =>
      o.onChange.subscribe((e) => this.valueChanged())
    );
  }

  private valueChanged() {
    let selectedI: {
      name: string;
      value: boolean | any[];
    }[] = this.options
      .filter((o) => o.checked)
      .map((o) => ({ name: o.value, value: o.checked }));

    this.groups
      .filter((o) => o.checked)
      .forEach((o) => {
        selectedI.push({ name: o.value, value: [] });
      });
    console.log(selectedI);
  }
}
