import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';
import { EmployeeFormUpdateComponent } from './component/employee-form-update/employee-form-update.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/employee-list',
    pathMatch: 'full'
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent,
  },
  {
    path: 'employee-form',
    component: EmployeeFormComponent,
  },
  {
    path: 'employee-form-update/:id',
    component: EmployeeFormUpdateComponent,
  }
];

@NgModule({
  declarations: [AppComponent, EmployeeListComponent, EmployeeFormComponent, EmployeeFormUpdateComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
