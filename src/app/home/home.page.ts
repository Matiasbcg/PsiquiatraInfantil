import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; 
import { trigger, transition, style, animate } from '@angular/animations';

interface Doctor {
  firstName: string;
  lastName: string;
  university: string;
  specialties: string[];
  photo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [
    trigger('slideInAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomePage {

  doctors: Doctor[] = [ 
    {
      firstName: 'Mateo',
      lastName: 'González ',
      university: 'Universidad Diego Portales',
      specialties: ['Psiquiatría de adultos o general.'],
      photo: 'assets/icon/Psiquiatra1.jpeg'
    },
    {
      firstName: 'Valentina',
      lastName: 'Muñoz ',
      university: 'Universidad San Sebastián',
      specialties: ['Psiquiatría infanto-juvenil.'],
      photo: 'assets/icon/Psiquiatra2.jpeg'
    },
    {
      firstName: 'Rodrigo',
      lastName: 'Rojas ',
      university: 'Universidad del Desarrollo',
      specialties: ['Psiquiatría geriátrica.'],
      photo: 'assets/icon/Psiquiatra3.jpeg'
    },
    {
      firstName: 'Pablo',
      lastName: 'Díaz',
      university: 'Universidad Católica del Maule',
      specialties: ['Psiquiatra de las adicciones.'],
      photo: 'assets/icon/Psiquiatra4.jpeg'
    },
    {
      firstName: 'Paula',
      lastName: 'Pérez',
      university: 'Universidad Autónoma de Chile',
      specialties: ['Neuropsiquiatría.'],
      photo: 'assets/icon/Psiquiatra5.jpeg'
    }
  ];

  constructor(private navCtrl: NavController) {} 

  showDoctorDetails(doctor: Doctor) { 
    const doctorString = JSON.stringify(doctor); 
    this.navCtrl.navigateForward('/doctorinfo', {
      queryParams: {
        doctor: doctorString 
      }
    });
  }
}



