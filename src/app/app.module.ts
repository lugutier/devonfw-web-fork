import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { OASPComponent } from './oasp/oasp.component';
import { OASP4JComponent } from './oasp4-j/oasp4-j.component';
import { OASP4JSComponent } from './oasp4-js/oasp4-js.component';
import { OASP4NETComponent } from './oasp4-net/oasp4-net.component';
import { MoreComponent } from './more/more.component';
import { FooterComponent } from './footer/footer.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { UsedTechnologiesComponent } from './used-technologies/used-technologies.component';
import { CollaborationContributionComponent } from './collaboration-contribution/collaboration-contribution.component';
import { TryItComponent } from './try-it/try-it.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { FrameworkComponent } from './framework/framework.component';
import { DevonfwComponent } from './devonfw/devonfw.component';
import { UniversityActivitiesComponent } from './university-activities/university-activities.component';
import { SliderComponent } from './slider/slider.component';
import { MarkdownModule } from 'ngx-md';
import { NgbModalComponent } from './ngb-modal/ngb-modal.component';
import { NgbModalCollaborationComponent } from './ngb-modal-collaboration/ngb-modal-collaboration.component';
import { Oasp4FnComponent } from './oasp4-fn/oasp4-fn.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { WhyDevonfwComponent } from './why-devonfw/why-devonfw.component';

const routes: Routes = [
  { path: '', redirectTo: 'oasp', pathMatch: 'full' },
  { path: 'oasp', component: OASPComponent },
  { path: 'oasp4-j', component: OASP4JComponent },
  { path: 'oasp4-js', component: OASP4JSComponent },
  { path: 'oasp4-net', component: OASP4NETComponent },
  { path: 'More', component: MoreComponent },
  { path: 'TermsOfUse', component: TermsOfUseComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    OASPComponent,
    OASP4JComponent,
    OASP4JSComponent,
    OASP4NETComponent,
    MoreComponent,
    FooterComponent,
    TabPanelComponent,
    UsedTechnologiesComponent,
    CollaborationContributionComponent,
    TryItComponent,
    GettingStartedComponent,
    FrameworkComponent,
    DevonfwComponent,
    UniversityActivitiesComponent,
    SliderComponent,
    NgbModalComponent,
    NgbModalCollaborationComponent,
    Oasp4FnComponent,
    TermsOfUseComponent,
    WhyDevonfwComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
