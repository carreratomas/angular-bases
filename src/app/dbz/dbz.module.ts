import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponentDBZ } from './components/list/list.component';
import { AddCaracterComponent } from './components/add-caracter/add-caracter.component';




@NgModule({
  declarations: [MainPageComponent, ListComponentDBZ, AddCaracterComponent],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule {


}
