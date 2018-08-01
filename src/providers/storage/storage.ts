import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import Training from '../../models/training';

@Injectable()
export class StorageProvider {
  private trainings: Array<Training>;

  constructor(public storage: Storage){
    this.trainings = new Array();
    storage.get('data').then((value) => {
      if (value){
        const jsonObject = JSON.parse(value);
        this.trainings = jsonObject.dataset;
      }
    });
  }

  public saveTrainings(newTrainingObject: Array<Training>): void{
    this.trainings = newTrainingObject;
    this.storage.set('data', JSON.stringify({dataset : this.trainings}));
  }

  public getTrainings(): Array<Training>{
    return this.trainings;
  }
}
