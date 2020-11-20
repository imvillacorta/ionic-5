import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private alertCtrl: AlertController
  ) { }

  async excluir() {
    const alert = await this.alertCtrl.create({
      cssClass: 'alerta',
      header: 'Excluir',
      message: 'Deseja realmente executar a exclusão?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'btnCancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim',
          cssClass: 'btnOk',
          handler: () => {
            this.aplicar();
          }
        }
      ]
    });

    await alert.present();
  }

  async aplicar() {
    const alert = await this.alertCtrl.create({
      header: 'Excluir',
      message: 'Sua exclusão foi realizada com sucesso.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
