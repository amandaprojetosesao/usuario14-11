import { Component, OnInit } from '@angular/core';
import { Autorizar } from '../entidade/autorizar';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-autorizar-salvar',
  templateUrl: './autorizar-salvar.page.html',
  styleUrls: ['./autorizar-salvar.page.scss'],
})
export class AutorizarSalvarPage implements OnInit {

    autorizar: Autorizar = new Autorizar();

    constructor(private fire: AngularFireDatabase, private modalController: ModalController,
      private rota: Router
    ) { }

  ngOnInit() {
  }

  enviar() {
     if (this.autorizar.key == null) {
       this.fire.list('autorizar').push(this.autorizar);
       this.autorizar = new Autorizar();
       this.rota.navigate(['pagina'])
       alert('Salvo com sucesso!')
     } else {
       this.fire.object('autorizar/' + this.autorizar.key).update(this.autorizar);
       this.modalController.dismiss();
     }

   }

 }
