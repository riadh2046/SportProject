import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AllPlayersComponent } from './components/all-players/all-players.component';
import { SearchMatchComponent } from './search-match/search-match.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { SearchPlayersComponent } from './components/search-players/search-players.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';

const routes: Routes = [
  //http:localhost:4200/==>
  // homeComponent will be displayed
  {path:'',component:HomeComponent},
  //http:localhost:4200/signin==>
  // loginComponent will be displayed
  {path:'signin',component:LoginComponent},
  //http:localhost:4200/inscription==>
  // signupComponent will be displayed
  {path:'inscription',component:SignupComponent},
  {path:'signupAdmin',component:SignupComponent},
  {path:'addmatch',component:AddMatchComponent},
  {path:'addplayer',component:AddPlayerComponent},
  {path:'addTeam',component:AddTeamComponent},
  {path:'admin',component:AdminComponent},
  {path:'matches',component:MatchesComponent},
  {path:'allplayers',component:AllPlayersComponent},
  {path:'search',component:SearchMatchComponent},
  //matchInfo/:id=> Path paramétré
  {path:'matchInfo/:id',component:MatchInfoComponent},
  {path:'editMatch/:id',component:EditMatchComponent},
  {path:'teamInfo/:id',component:TeamInfoComponent},
  {path:'playerInfo/:id',component:PlayerInfoComponent},
  {path:'editPlayer/:id',component:EditPlayerComponent},
  {path:'searchPlayer',component:SearchPlayersComponent},
  {path:'editTeam/:id',component:EditTeamComponent},









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
