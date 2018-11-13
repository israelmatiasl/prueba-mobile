import { Injectable } from '@angular/core';
import { TeamsProvider } from '../teams/teams';
import { AlertController, ToastController } from 'ionic-angular';

@Injectable()
export class AlertsProvider {

    constructor(private teamsProvider:TeamsProvider, private alertCtrl:AlertController, private toastCtrl:ToastController){}

    DeleteConfirmation(model:string, $key:string) : Promise<any> {
        return new Promise<any>((resolve, reject)=>{
            let confirm = this.alertCtrl.create({
                title: 'Está seguro de enviar los resultados?',
                message: 'Luego de realizar esta operación no se podrá modificar las respuestas',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: () => { }
                    },
                    {
                        text: 'Estoy de acuerdo',
                        handler: () => {
                            switch(model){
                                case 'team': {
                                    this.teamsProvider.deleteTeam($key).subscribe(res=> resolve(res));
                                } break;
                                default : {
                                    reject('Error!');
                                } break;
                            }
                        }
                    }
                ]
            });
            confirm.present();
        });
    }

    ResultAlert(message:string){
        const toast = this.toastCtrl.create({
            message: message,
            showCloseButton: true,
            closeButtonText: 'Ok'
          });
          toast.present();
    }
}