import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {TablaComponent} from './Componentes/tabla/tabla.component';
import {FormComponent} from './Componentes/form/form.component';

const appRoutes: Routes = [
   {path: '', component:TablaComponent},
   {path: 'Form/', component:FormComponent}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);