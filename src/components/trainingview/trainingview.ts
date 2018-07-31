import { Component, Input } from '@angular/core';
import Training from '../../models/training';

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
  private formInput: Number;

  constructor() {
    console.log('Hello TrainingviewComponent Component');
  }

  public addTime(): void{
    console.log('Saving this: ' + this.formInput);
  }
}
