import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private alertCtrl: AlertController
  ) { }

  async aplicar() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Alerta Simples',
      message: 'Exemplo de um modelo simples de alert.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
