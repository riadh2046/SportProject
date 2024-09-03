import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  //Adress de destination
  //Adress du serveur BE
  //Adress de la cuisine
  matchUrl: string = "http://localhost:3000/matches";

  constructor(private httpClient: HttpClient) {}

  // Request to add Match
  //Response :Boolean/string
  addMatch(matchObj: any) {
    return this.httpClient.post(this.matchUrl, matchObj);

  }
 

  //Request to get all Matches
  //response:Array of Objects
  getAllMatches() {
    return this.httpClient.get<{T:any}>(this.matchUrl);
  }

  //request to get Match by ID
  //Response : one Object
  getMatchById(id: any) {
    // return this.httpClient.get(this.matchUrl +"/" + id);
    return this.httpClient.get<{match:any}>(`${this.matchUrl}/${id}`);
  }

  // Request to Edit Match
  //Response :Boolean/string
  editMatch(newMatch: any) {
    return this.httpClient.put<{msg:string}>(this.matchUrl, newMatch);
  }
  //request to deleteObject By ID
  deleteMatchById(id: any) {
    return this.httpClient.delete<{isDeleted:boolean}>(`${this.matchUrl}/${id}`);
  }


}
