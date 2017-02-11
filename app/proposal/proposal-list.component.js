"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var proposal_1 = require("./proposal");
var ProposalListComponent = (function () {
    function ProposalListComponent() {
        this.proposal1 = new proposal_1.Proposal(1, 'Macdonalds', 'http://www.macdonalds.com', 'Ruby on Rails', 120, 75, 19, 'me@mcdonalds.com');
        this.proposal2 = new proposal_1.Proposal(2, 'Nike', 'http://www.nike.com', 'NodeJS', 10, 75, 19, 'me@nike.com');
        this.proposal3 = new proposal_1.Proposal(3, 'Volvo', 'http://www.volvo.com', 'Ruby on Rails', 20, 75, 19, 'me@volvo.com');
        this.proposals = [this.proposal1, this.proposal2, this.proposal3];
    }
    return ProposalListComponent;
}());
ProposalListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'proposal-list',
        templateUrl: 'proposal-list.component.html'
    })
], ProposalListComponent);
exports.ProposalListComponent = ProposalListComponent;
//# sourceMappingURL=proposal-list.component.js.map