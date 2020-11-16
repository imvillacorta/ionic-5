import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.page.html',
  styleUrls: ['./contas.page.scss'],
})
export class ContasPage implements OnInit {

  constructor(private router: Router, private nav : NavController) { }

  ngOnInit() {
  }

  adicionar(){
    // this.nav.navigateForward('conta');
    this.router.navigate(['/contas/conta']);
  }

}
