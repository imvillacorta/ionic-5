import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {

  constructor(
    private nav : NavController
  ) { }

  ngOnInit() {
  }

  inicio(){
    this.nav.navigateRoot('home');
  }

}
