import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private alertCtrl: AlertController
  ) { }

  async confirm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar!',
      message: 'Deseja realmente aplicar esta ação ?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: (blah) => {
            console.log('Ação cancelada');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Ação aplicada');
          }
        }
      ]
    });

    await alert.present();
  }

}
