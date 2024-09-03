import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { StandingsComponent } from './components/standings/standings.component';
import { BlogComponent } from './components/blog/blog.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { HomeComponent } from './components/home/home.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchTableComponent } from './components/match-table/match-table.component';
import { PlayerTableComponent } from './components/player-table/player-table.component';
import { MatchesComponent } from './components/matches/matches.component'
import {TeamTableComponent} from './components/team-table/team-table.component';
import { StadiumTableComponent } from './components/stadium-table/stadium-table.component';
import { AllPlayersComponent } from './components/all-players/all-players.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchMatchComponent } from './search-match/search-match.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { SearchPlayersComponent } from './components/search-players/search-players.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { InversePipe } from './pipes/inverse.pipe';
import { HttpClientModule } from "@angular/common/http";
import { EditTeamComponent } from './components/edit-team/edit-team.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    CupEventComponent,
    ResultComponent,
    NewsComponent,
    StandingsComponent,
    BlogComponent,
    InfoComponent,
    ArticleComponent,
    HomeComponent,
    AddMatchComponent,
    AddPlayerComponent,
    AddTeamComponent,
    AdminComponent,
    TeamTableComponent,
    MatchTableComponent,
    PlayerTableComponent,
    MatchesComponent,
    StadiumTableComponent,
    AllPlayersComponent,
    SearchMatchComponent,
    MatchInfoComponent,
    EditMatchComponent,
    TeamInfoComponent,
    PlayerInfoComponent,
    EditTeamComponent,
    EditPlayerComponent,
    SearchPlayersComponent,
    AsterixPipe,
    InversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
