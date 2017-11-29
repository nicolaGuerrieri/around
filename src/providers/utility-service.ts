import { Injectable } from '@angular/core';
import { Geolocation } from 'ionic-native';


/*
  Generated class for the UtilityService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilityService {
  coords: any;
  accuracy: any;
  error: any;
  constructor() {
    console.log('Hello UtilityService Provider');
  }

  searchLocation() {

    return new Promise(resolve => {
 
      Geolocation.getCurrentPosition().then((position) => {
        this.coords = position.coords.latitude + " " + position.coords.longitude;
        resolve(this.coords);

      }, (err) => {
        alert(err);
        resolve(err);
      });
    });

  }

}
