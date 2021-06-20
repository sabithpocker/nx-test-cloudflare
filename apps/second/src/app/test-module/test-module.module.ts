import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TestModuleRoutingModule } from './test-module-routing.module';
import { TestModuleComponent } from './test-module.component';

const routes: Routes = [
  { path: '', component: TestModuleComponent }
];

@NgModule({
  declarations: [
    TestModuleComponent
  ],
  imports: [
    CommonModule,
    TestModuleRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class TestModuleModule { }
