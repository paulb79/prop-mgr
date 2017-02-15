import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposap-show',
  templateUrl: 'proposal-show.component.html'
})
export class ProposalShowComponent implements OnInit {
  id: number; // can be accessed in the view using {{ id }}
  routeId: any;

  constructor(
    // uses dependancy injection - on visiting the show page will call constructor

    private route: ActivatedRoute
  ) {}

  // store the ID from the URL when the proposal is displayed
  ngOnInit(): void {
    this.routeId = this.route.params.subscribe(
      // anon fn
      params => {
        this.id = +params['id']; // convert strings to number using the prefix operator +
      }
    )
  }
}
