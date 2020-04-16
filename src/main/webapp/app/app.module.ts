import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterSampleApplication20200416SharedModule } from 'app/shared/shared.module';
import { JhipsterSampleApplication20200416CoreModule } from 'app/core/core.module';
import { JhipsterSampleApplication20200416AppRoutingModule } from './app-routing.module';
import { JhipsterSampleApplication20200416HomeModule } from './home/home.module';
import { JhipsterSampleApplication20200416EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterSampleApplication20200416SharedModule,
    JhipsterSampleApplication20200416CoreModule,
    JhipsterSampleApplication20200416HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterSampleApplication20200416EntityModule,
    JhipsterSampleApplication20200416AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class JhipsterSampleApplication20200416AppModule {}
