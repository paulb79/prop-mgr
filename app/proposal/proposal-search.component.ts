import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { ProposalService }    from './proposal.service';
import { Proposal }           from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-search',
  templateUrl: 'proposal-search.component.html',
  styleUrls: [ 'proposal.css' ],
  providers: [ ProposalService ]
})

export class ProposalSearchComponent implements OnInit {
  proposals: Observable<Proposal[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private proposalService: ProposalService,
    private router: Router
  ) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  goToShow(proposal: Proposal): void {
    let link = ['/proposal', proposal.id];
    this.router.navigate(link);
  }

  ngOnInit(): void {
    this.proposals = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term
              ? this.proposalService.search(term)
              : Observable.of<Proposal[]>([]))
            .catch(error => {
              // TODO: add real error handling
              console.log(error);
              return Observable.of<Proposal[]>([]);
            });
  }
}
