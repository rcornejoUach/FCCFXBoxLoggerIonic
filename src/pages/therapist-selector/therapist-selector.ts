import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TherapistManagerPage} from '../therapist-manager/therapist-manager';
@Component({
  selector: 'page-therapist-selector',
  templateUrl: 'therapist-selector.html'
})

export class TherapistSelectorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param



    }
    openPatientManager(){
      this.navCtrl.push(TherapistManagerPage);
    }
}
