import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Documents Dashboard";
  documents: Document[] = [
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
  ]
}
