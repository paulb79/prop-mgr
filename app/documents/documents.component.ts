import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Document } from './document';
import { DocumentService } from './document.service';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css'],
  providers: [ DocumentService ], // each instance of the component gets its only instance of the documentService.
})
export class DocumentsComponent implements OnInit {
  pageTitle: string = "Documents Dashboard";
  documents: Document[];
  errorMessage: string;
  mode = "Observable";

  constructor(
    private documentService: DocumentService
  ) {}

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getDocuments());
  }

  getDocuments() {
    this.documentService.getDocuments()
        .subscribe(
          documents => this.documents = documents,
          error => this.errorMessage = <any>error
        );
  }
}
