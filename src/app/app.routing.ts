import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages
import { HomeComponent } from './pages/Home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pageNotFound', loadChildren: './pages/PageNotFound/PageNotFound.module#PageNotFoundModule' }
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
