import { Component, OnChanges, EventEmitter, Input, Output, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HijoComponent implements OnChanges {

  @Input() objeto: any;
  @Output() emitter = new EventEmitter<string>();
  texto!: string;

  emit() {
    this.emitter.emit("mensaje emmiter desde el hijo");
  }
  
  ngOnChanges(simpleChanges: SimpleChanges): void {
    console.log(simpleChanges);
  }
}


