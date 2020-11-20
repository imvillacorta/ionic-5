import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.page.html',
  styleUrls: ['./frutas.page.scss'],
})
export class FrutasPage implements OnInit {

  constructor(
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
  }

  async acoes() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Ações',
      cssClass: 'action',
      buttons: [{
        cssClass: 'danger',
        text: 'Excluir',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Exclusão');
        }
      }, {
        cssClass: 'primary',
        text: 'Editar',
        icon: 'create',
        handler: () => {
          console.log('Edição');
        }
      }, {
        cssClass: 'medium',
        text: 'Detalhes',
        icon: 'eye',
        handler: () => {
          console.log('Detalhes');
        }
      }
      ]
    });
    await actionSheet.present();
  }
}

