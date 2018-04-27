import { Component } from '@angular/core';
import { NavController,Platform,AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";

@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})
export class HomePage {

 users: Observable<any>;

 constructor(public navCtrl: NavController, private httpClient: HttpClient, private plt: Platform, private alertCtrl: AlertController) {
   this.users = this.httpClient.get('https://randomuser.me/api/?results=20')
   .map(res => res['results'])
 }
}