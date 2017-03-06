"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
// Observable class extensions
require("rxjs/add/observable/of");
// Observable operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var proposal_service_1 = require("./proposal.service");
var ProposalSearchComponent = (function () {
    function ProposalSearchComponent(proposalService, router) {
        this.proposalService = proposalService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    ProposalSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    ProposalSearchComponent.prototype.goToShow = function (proposal) {
        var link = ['/proposal', proposal.id];
        this.router.navigate(link);
    };
    ProposalSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.proposals = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return term
            ? _this.proposalService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: add real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    return ProposalSearchComponent;
}());
ProposalSearchComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'proposal-search',
        templateUrl: 'proposal-search.component.html',
        styleUrls: ['proposal.css'],
        providers: [proposal_service_1.ProposalService]
    }),
    __metadata("design:paramtypes", [proposal_service_1.ProposalService,
        router_1.Router])
], ProposalSearchComponent);
exports.ProposalSearchComponent = ProposalSearchComponent;
//# sourceMappingURL=proposal-search.component.js.map