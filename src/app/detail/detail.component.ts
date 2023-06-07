import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  delayedString!: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {}
 
  ngOnInit(): void {
    this.delayedString = this.activatedRoute.snapshot.data['data'];
    console.log(this.delayedString);
  }

}
