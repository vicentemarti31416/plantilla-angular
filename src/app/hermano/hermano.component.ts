import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.scss']
})
export class HermanoComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params);
    })
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      console.log(queryParams)
    })
  }

}
