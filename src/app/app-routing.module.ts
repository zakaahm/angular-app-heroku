import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuraanComponent } from './quraan/quraan.component';
import { VersesComponent } from './verses/verses.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {path:"chapters", component: QuraanComponent},
  {path:"faq", component: FaqComponent},
  {path:"verses/:id", component: VersesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
