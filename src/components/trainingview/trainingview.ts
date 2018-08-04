import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import Training from '../../models/training';
import Measure from '../../models/measure';

/**
 * Generated class for the TrainingviewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'trainingview',
  templateUrl: 'trainingview.html'
})
export class TrainingviewComponent {
  @Input() sample: Training;
  @Output() complete = new EventEmitter<Training>();
  private formInput: Number;

  constructor(public actionSheetCtrl: ActionSheetController) {
    console.log('Hello TrainingviewComponent Component');
  }

  public addTime(): void{
    const measure: Measure = {
      date: new Date(),
      measure: this.formInput
    }
    this.sample.measures.push(measure);
    this.complete.emit(this.sample);
    this.formInput = null;
  }

  private deleteTraining(entry: Measure):void{
    this.sample.measures.forEach(training=>{
      if (training.date === entry.date){
        this.sample.measures.splice(this.sample.measures.indexOf(training),1);
        this.complete.emit(this.sample);
      }
    });
  }

  //tbr
  tomas(item){
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Delete this entry?',
      buttons: [
        {
          icon: 'trash',
          text: 'Delete training',
          role: 'Delete',
          handler: () => {
            this.deleteTraining(item);
          }
        },{
          icon: 'undo',
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
