import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import Training from '../../models/training';
import { StorageProvider } from '../../providers/storage/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private trainings: Array<Training>;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public storageProvider: StorageProvider) {
    this.trainings = new Array();
    setTimeout(()=>{
      this.trainings = storageProvider.getTrainings()
    },800);
  }

  public deleteGoal(training: Training): void{
    this.trainings.splice(this.trainings.indexOf(training),1);
    this.storageProvider.saveTrainings(this.trainings);
  }

  private generateNewGoal(goal: String): void{
    const training: Training = {
      id: this.trainings.length,
      name: goal,
      measures: []
    }
    this.trainings.push(training);
    this.storageProvider.saveTrainings(this.trainings);
  }

  public presentPrompt(): void{
    let alert = this.alertCtrl.create({
      title: 'Add a new Goal',
      inputs: [
        {
          name: 'goal',
          placeholder: 'e.g.: Run 5min, Bike 10mim, Hike 30mim,...'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Create',
          handler: data => {
            if (data.goal) {
              this.generateNewGoal(data.goal);
            }
          }
        }
      ]
    });
    alert.present();
  }
}
