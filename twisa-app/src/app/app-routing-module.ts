import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectAttributesComponent } from './select-attributes/select-attributes.component';
import { ConditionsComponent } from './conditions/conditions.component';




const routes: Routes = [
    {
        path: '',
        redirectTo: 'selectAttributes',
        pathMatch: 'full'
    },
    {
        path: 'selectAttributes',
        component: SelectAttributesComponent
    },
    {
        path: 'conditions',
        component: ConditionsComponent,
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
