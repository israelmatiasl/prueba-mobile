import { Component, Input } from '@angular/core';
import { Team } from '../../models/team.model';
import { NavController } from 'ionic-angular';
import { AlertsProvider } from '../../providers/providers.index';

@Component({
  selector: 'team-item',
  templateUrl: 'team-item.html'
})
export class TeamItemComponent {

  @Input() public team:Team;

  constructor(public navCtrl: NavController,
              private alertsProvider: AlertsProvider) {
  }

  editTeam($key:string){
    this.navCtrl.push('TeamAddEditPage', $key);
  }

  deleteTeam($key:string){
    this.alertsProvider.DeleteConfirmation('team', $key).then(()=>{
      this.alertsProvider.ResultAlert(`Se ha eliminado el equipo ${this.team.name}`)
    });
  }
}
