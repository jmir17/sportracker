import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import Training from '../../models/training';

@Injectable()
export class StorageProvider {
  private trainings: Array<Training>;
  private static instance = new StorageProvider();
  private storage: Storage;
  public static getInstance() {
      return this.instance;
  }

  //TODO remove dataset envelop
  private constructor() {
    this.trainings = new Array();
    this.storage.get('data').then((value) => {
      const jsonObject = JSON.parse(value);
      this.trainings = jsonObject.dataset;
    }).catch(err => {
      console.log('ERROR READING DATA: ' + err);
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
