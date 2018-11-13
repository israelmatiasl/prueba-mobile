import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamAddEditPage } from './team-add-edit';


import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    TeamAddEditPage,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    IonicPageModule.forChild(TeamAddEditPage),
  ],
})
export class TeamAddEditPageModule {}
