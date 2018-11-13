import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TeamsProvider } from "../../providers/providers.index";
import { Team } from '../../models/team.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  public teams:Team[];
  public isLoading:boolean;

  constructor(public navCtrl: NavController, private teamsProvider:TeamsProvider) {
  }

  ngOnInit(){
    this.getTeams();
  }

  getTeams(){
    this.isLoading = true;
    this.teamsProvider.getTeams().snapshotChanges().subscribe((res:any) =>{
      this.teams = new Array();
      res.forEach(elem=>{
        let payload = elem.payload.toJSON();
        let team = new Team(payload.name, payload.coach, payload.stadium, elem.key);
        this.teams.push(team);
      });
      this.isLoading = false;
    }, err=> console.log(err));
  }

  addTeam(){
    this.navCtrl.push('TeamAddEditPage', '');
  }
}
