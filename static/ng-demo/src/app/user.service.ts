import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class UserService {

  // http options used for making API calls
  private httpOptions: any;

  // the actual JWT token
  public token: string;

  // the token expiration date
  public token_expires: Date;

  // the username of the logged in user
  public username: string;

  // error messages received from the login attempt
  public errors: any = [];

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
  public login(user) {
    this.http.post('/api-token-auth/', JSON.stringify(user), this.httpOptions).subscribe(
      data => {
        console.log('login success', data);
        this.token = data['token'];
        this.errors = [];

        const token_parts = this.token.split(/\./);
        const token_decoded = JSON.parse(window.atob(token_parts[1]));
        this.token_expires = new Date(token_decoded.exp * 1000);

        this.username = token_decoded.username;

      },
      err => {
        console.error('login error', err);
        this.errors = [];
        if (typeof(err['error']['non_field_errors'] !== undefined)) {
          console.log(err['error']['non_field_errors']);
          this.errors.concat(err['error']['non_field_errors']);
        }
        if (typeof(err['error']['username'] !== undefined)) {
          console.log(err['error']['username']);
          this.errors.concat(err['error']['username']);
        }
        if (typeof(err['error']['password'] !== undefined)) {
          console.log(err['error']['password']);
          this.errors.concat(err['error']['password']);
        }
      }
    );
  }

  /**
   * Refreshes the JWT token, to extend the time the user is logged in
   */
  public refreshToken() {
    this.http.post('/api-token-refresh/', JSON.stringify({token: this.token}), this.httpOptions).subscribe(
      data => {
        console.log('refresh success', data);
        this.token = data['token'];
        this.errors = [];

        const token_parts = this.token.split(/\./);
        const token_decoded = JSON.parse(window.atob(token_parts[1]));
        this.token_expires = new Date(token_decoded.exp * 1000);

        this.username = token_decoded.username;

      },
      err => {
        console.error('refresh error', err);
        this.errors = [];
        if (typeof(err['error']['non_field_errors'] !== undefined)) {
          console.log(err['error']['non_field_errors']);
          this.errors.concat(err['error']['non_field_errors']);
        }
        if (typeof(err['error']['username'] !== undefined)) {
          console.log(err['error']['username']);
          this.errors.concat(err['error']['username']);
        }
        if (typeof(err['error']['password'] !== undefined)) {
          console.log(err['error']['password']);
          this.errors.concat(err['error']['password']);
        }
      }
    );
  }

  public logout() {
    this.token = null;
    this.token_expires = null;
    this.username = null;
  }

}
