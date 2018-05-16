import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { DisplayQuotesComponent } from './display-quotes/display-quotes.component';

const routes: Routes = [
    {path: 'home',component:HomeComponent},
    {path: 'new',component:NewComponent},
    {path: 'edit/:id',component:EditComponent},
    {path: 'authors/:id/quotes',component:DisplayQuotesComponent},
    {path: '**',component:HomeComponent},
    
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}