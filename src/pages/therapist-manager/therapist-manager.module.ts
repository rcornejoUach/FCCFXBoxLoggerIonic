import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TherapistManagerPage } from './therapist-manager';

@NgModule({
  declarations: [
    TherapistManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(TherapistManagerPage),
  ],
})
export class TherapistManagerPageModule {}
