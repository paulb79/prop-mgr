import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2PaginationModule } from 'ng2-pagination';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentService } from './documents/document.service';
import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show.component';
import { ProposalSearchComponent } from './proposal/proposal-search.component';
import { ProposalService } from './proposal/proposal.service';


import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2PaginationModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    DocumentsComponent,
    ProposalListComponent,
    ProposalNewComponent,
    ProposalShowComponent,
    ProposalSearchComponent,
  ],
  providers: [
    DocumentService, // available everywhere as a singleton
    ProposalService,
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
