import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import Training from '../../models/training';
import { StorageProvider } from '../../providers/storage/storage';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  private trainings: Array<Training>;
  constructor(public navCtrl: NavController, public storageProvider: StorageProvider) {
    this.trainings = new Array();
    setTimeout(()=>{
      this.trainings = storageProvider.getTrainings()
    },800);
  }

}
