import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
  proposal1: Proposal = new Proposal(1, 'Macdonalds', 'http://www.macdonalds.com', 'Ruby on Rails', 120, 75, 19, 'me@mcdonalds.com');
  proposal2: Proposal = new Proposal(2, 'Nike', 'http://www.nike.com', 'NodeJS', 10, 75, 19, 'me@nike.com');
  proposal3: Proposal = new Proposal(3, 'Volvo', 'http://www.volvo.com', 'Ruby on Rails', 20, 75, 19, 'me@volvo.com');

  proposals: Proposal[] = [this.proposal1, this.proposal2, this.proposal3];
}
