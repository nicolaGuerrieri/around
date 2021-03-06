import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { UtilityService } from '../../providers/utility-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [UtilityService]
})
export class HomePage {

  coords: any;
  accuracy: any;
  error: any;
  userData: any = null;
  constructor(public navCtrl: NavController, public utilityService: UtilityService, private facebook: Facebook) {
    this.searchLocation();
  }

  searchLocation() {
    this.utilityService.searchLocation().then(data => {
      this.coords = data;
    });
  }

  loginWithFB() {
    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] }
      })
    })
  }


}
