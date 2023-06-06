import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
    })
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      console.log(queryParams)
    })
  }

}
