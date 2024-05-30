import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

interface Doctor {
  firstName: string;
  lastName: string;
  university: string;
  specialties: string[];
  photo: string;
}

@Component({
  selector: 'app-doctorinfo',
  templateUrl: './doctorinfo.page.html',
  styleUrls: ['./doctorinfo.page.scss'],
})
export class DoctorinfoPage implements OnInit {

  doctor!: Doctor; 

  constructor(private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['doctor']) {
        this.doctor = JSON.parse(params['doctor']);
      }
    });
  }

}







