import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from'@angular/material/sidenav';
import { MatCardModule } from'@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { PoiReadComponent } from './components/poi/poi-read/poi-read.component';
import { PosicoesReadComponent } from './components/posicoes/posicoes-read/posicoes-read.component';
import { PositionCrudComponent } from './views/position-crud/position-crud/position-crud.component'; 
import { HomeComponent } from './views/home/home.component';
import { PoiCrudComponent } from './views/poi-crud/poi-crud.component';
import { ReportCrudComponent } from './views/report-crud/report-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PoiCrudComponent,
    PoiReadComponent,
    PosicoesReadComponent,
    PositionCrudComponent,
    ReportCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule, 
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
