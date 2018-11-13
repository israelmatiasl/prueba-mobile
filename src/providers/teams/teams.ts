import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from "../../helpers/constants";
import { Team } from '../../models/team.model';
import { map } from "rxjs/operators";

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class TeamsProvider {

  teamList:AngularFireList<any>;

  constructor(private _http: HttpClient, private _firebase:AngularFireDatabase) {
    console.log('entra sin problemas');
  }

  createTeam(team:Team){
    let url = `${Constants.FirebaseUrl}.json`;
    let body = JSON.stringify(team);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this._http.post(url, body, {headers}).pipe(
      map((res:any)=>{
        return res;
      })
    )
  }

  updateTeam(team:Team, $key:string){
    let url = `${Constants.FirebaseUrl}/${$key}.json`;
    let body = JSON.stringify(team);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this._http.put(url, body, {headers}).pipe(
      map((res:any) => {
        return res;
      })
    )
  }

  getTeams(){
    return this.teamList = this._firebase.list('teams');
  }

  getTeam($key:string){
    let url = `${Constants.FirebaseUrl}/${$key}.json`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this._http.get(url, {headers}).pipe(
      map((res:any) => {
        return res;
      })
    )
  }

  deleteTeam($key:string){
    let url = `${Constants.FirebaseUrl}/${$key}.json`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this._http.delete(url, {headers}).pipe(
      map((res:any) => {
        return res;
      })
    )
  }
}
