import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  //adress de serveur backend
  //adress de destination
  teamURL: string = "http://localhost:3000/teams";

  constructor(private http: HttpClient) { }

//request to team
//reponse 
  addTeam(team:any){
    return this.http.post<{isAdded:boolean}>(this.teamURL,team)
  }
  deleteTeamById(id:any) {
    return this.http.delete<{isDeleted:boolean}>(`${this.teamURL}/${id}`);
  }
  getAllTeam() {
    return this.http.get<{ teams: any}>(this.teamURL);
  }
  getTeamById(id:any) {
    return this.http.get(`${this.teamURL}/${id}`);
  }
  editTeam(team: any) {
    return this.http.put(this.teamURL, team);
  }
  

}
