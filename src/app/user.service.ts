import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userUrl: string = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) {}
  getAllUsers() {
    return this.httpClient.get<{ T: any }>(this.userUrl);
  }
  //request to get UserById
  //reponse:one object
  getUserById(id: any) {
    return this.httpClient.get<{ user: any }>(`${this.userUrl}/${id}`);
  }
  //request to delete UserById
  //reponse :boolean (true or false)
  deleteUserById(id: any) {
    return this.httpClient.delete<{ msg: string }>(`${this.userUrl}/${id}`);
  }
  // request to Adduser
  // reponse:boolean/string
  addUser(userObject: any, photo: File) {
    let fData = new FormData();
    fData.append('firstName', userObject.firstName);
    fData.append('lastName', userObject.lastName);
    fData.append('email', userObject.email);
    fData.append('pwd', userObject.pwd);
    fData.append('role', userObject.role);
    fData.append('img', photo);

    return this.httpClient.post<{ msg: string; isSaved: boolean }>(
      this.userUrl + '/signup',
      fData
    );
  }
  // request to Edituser
  // reponse:boolean/string
  editUser(newUser: any) {
    return this.httpClient.put<{ msg: string }>(this.userUrl, newUser);
  }
  searchMatch(userObject: any) {
    return this.httpClient.post<{ T: any }>(
      `${this.userUrl}/search`,
      userObject
    );
  }

  // user={email,pwd}
  login(userObject: any) {
    return this.httpClient.post<{ msg: string; user: any }>(
      this.userUrl + '/login',
      userObject
    );
  }
}
