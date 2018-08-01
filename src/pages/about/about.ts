import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import Training from '../../models/training';
import { StorageProvider } from '../../providers/storage/storage';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Slides) slides: Slides;
  private trainings: Array<Training>;
  constructor(public navCtrl: NavController, public storageProvider: StorageProvider) {
    this.trainings = new Array();
    setTimeout(()=>{
      this.trainings = storageProvider.getTrainings()
    },800);
  }

  public addTraining(training: Training): void{
    this.trainings.forEach(element => {
      if (element.id === training.id){
        this.trainings[this.trainings.indexOf(element)].measures = training.measures;
        this.storageProvider.saveTrainings(this.trainings);
      }
    });
  }
}
