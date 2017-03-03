import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';

@Component({
  moduleId: module.id,
  selector: 'proposap-show',
  templateUrl: 'proposal-show.component.html',
  styleUrls: [ './proposal.css' ],
  providers: [ ProposalService ]

})
export class ProposalShowComponent implements OnInit {


  constructor(
    // uses dependancy injection - on visiting the show page will call constructor

    private route: ActivatedRoute,
    private proposalService: ProposalService,
    private http: Http
  ) {}


  @Input()
  proposal: Proposal;

  // store the ID from the URL when the proposal is displayed
  ngOnInit(): void {
    let proposalRequest = this.route.params
        .flatMap((params: Params) =>
            this.proposalService.getProposal(+params['id']));

    proposalRequest.subscribe(response => this.proposal = response.json());
  }

}
