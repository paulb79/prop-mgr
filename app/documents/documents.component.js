"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DocumentsComponent = (function () {
    function DocumentsComponent() {
        this.documents = [
            {
                title: "My First Doc",
                description: "My qwerty doc",
                file_url: "http://bbc.co.uk",
                updated_at: '07/02/17',
                image_url: "http://bbc.co.uk"
            },
            {
                title: "My Doc 2",
                description: "My qwerty doc",
                file_url: "http://bbc.co.uk",
                updated_at: '07/02/17',
                image_url: "http://bbc.co.uk"
            },
            {
                title: "My Doc 3",
                description: "My qwerty doc",
                file_url: "http://bbc.co.uk",
                updated_at: '07/02/17',
                image_url: "http://bbc.co.uk"
            },
            {
                title: "My Doc 3",
                description: "My qwerty doc",
                file_url: "http://bbc.co.uk",
                updated_at: '07/02/17',
                image_url: "http://bbc.co.uk"
            },
        ];
    }
    return DocumentsComponent;
}());
DocumentsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'documents',
        templateUrl: 'documents.component.html'
    })
], DocumentsComponent);
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map