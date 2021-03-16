import { ReportCrudComponent } from './views/report-crud/report-crud.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PoiCrudComponent } from './views/poi-crud/poi-crud.component';
import { PosicoesReadComponent } from './components/posicoes/posicoes-read/posicoes-read.component';
import { PositionCrudComponent } from './views/position-crud/position-crud/position-crud.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "pois",
  component: PoiCrudComponent
},
{
  path: "posicoes",
  component: PositionCrudComponent
},
{
  path: "relatorio",
  component: ReportCrudComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
