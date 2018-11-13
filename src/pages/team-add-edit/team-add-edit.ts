import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TeamsProvider, AlertsProvider } from '../../providers/providers.index';
import { Team } from '../../models/team.model';

@IonicPage()
@Component({
  selector: 'page-team-add-edit',
  templateUrl: 'team-add-edit.html',
})
export class TeamAddEditPage implements OnInit {

  $key:string;
  isEdit:boolean;
  public teamForm:FormGroup;
  public text:string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private teamsProvider:TeamsProvider,
              private alertsProvider:AlertsProvider) {
  }

  ngOnInit(){
    this.initForm();
    this.$key = this.navParams.data;
    if(this.$key.length > 1){
      this.getTeam(this.$key);
      this.text = 'Editar el equipo';
    }
    else{
      this.$key = null;
      this.text = 'Nuevo equipo';
    }
  }

  initForm(name=null, stadium=null, coach=null){
    this.teamForm = new FormGroup({
      name: new FormControl(name, [Validators.required]),
      stadium: new FormControl(stadium, [Validators.required]),
      coach: new FormControl(coach, [Validators.required])
    });
  }

  getTeam($key){
    this.teamsProvider.getTeam($key).subscribe((res:any)=>{
      this.initForm(res.name, res.stadium, res.coach);
    }, ()=> {});
  }

  saveTeam(){
    if(!this.teamForm.invalid){
      let formBody = this.teamForm.controls;
      let team = new Team(formBody.name.value, formBody.coach.value, formBody.stadium.value);
      //New Team
      if(this.$key==null){
        this.teamsProvider.createTeam(team).subscribe((res:any)=>{
          if(res) {
            this.initForm();
            this.alertsProvider.ResultAlert('Se ha añadido un nuevo equipo');
            this.navCtrl.pop();
          }
        }, _ => console.log('Ocurrió un error'));
      }
      //Update Team
      else{
        this.teamsProvider.updateTeam(team, this.$key).subscribe((res:any) =>{
          if(res){
            this.initForm();
            this.$key = null;
            this.alertsProvider.ResultAlert('Se ha actualizado el equipo');
            this.navCtrl.pop();
          }
        }, _ => console.log('Ocurrió un error'));
      }
    }
  }
}
