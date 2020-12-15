import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-multi-select-option',
  templateUrl: './multi-select-option.component.html',
  styleUrls: ['./multi-select-option.component.scss'],
})
export class MultiSelectOptionComponent implements OnInit {
  @Input('checked') checked = false;
  @Output('checkedChange') onChange = new EventEmitter<boolean>();
  @Input('value') value
  @ViewChild('option', { static: true }) option: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  toggleCheck(value: boolean = undefined) {
    this.checked = value === undefined ? !this.checked : value;
    this.onChange.emit(this.checked);
  }

  setLevel(level) {
    const el = this.option.nativeElement as HTMLElement;
    el.style.setProperty('padding-left', `${level * 10 + 10}px`);
  }
}
