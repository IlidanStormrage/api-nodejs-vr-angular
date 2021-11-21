import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService],
})
export class LoginComponent implements OnInit {
  public page_title: string;
  public user: User;
  public status: string;
  public identity;
  public token;
  constructor(private _userService: UserService) {
    this.page_title = 'Identificate';
    this.user = new User('', '', '', '', '', '', 'ROLE_USER');
    this.status = '';
    this.identity = '';
    this.token = '';
  }

  ngOnInit(): void {}

  onSubmit(loginForm: any) {
    //Conseguir objeto completo del usuario logueado
    this._userService.signup(this.user, true).subscribe(
      (response) => {
        if (response.user && response.user._id) {
          //GUardamos el usuario en una propiedad
          this.identity = response.user;

          //Conseguir el token del usuario identificado

          //Conseguir objeto completo del usuario logueado
          this._userService.signup(this.user, true).subscribe(
            (response) => {
              if (response.token) {
                //GUardar el token del usuario en una propiedad
                this.token = response.token;
              } else {
                this.status = 'error';
              }
            },
            (error) => {
              this.status = 'error';
            }
          );
        } else {
          this.status = 'error';
        }
      },
      (error) => {
        this.status = 'error';
      }
    );
  }
}
