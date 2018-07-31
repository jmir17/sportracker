import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import Training from '../../models/training';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private trainings: Array<Training>;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    this.trainings = new Array();
  }

  private generateNewGoal(goal: String): void{
    const train: Training = {
      id: this.trainings.length,
      name: goal,
      measures: []
    }
    this.trainings.push(train);
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
