import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  constructor() {
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
}
