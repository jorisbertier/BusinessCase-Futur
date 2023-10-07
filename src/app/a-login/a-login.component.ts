import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/service/login/login.service';
import { IToken } from '../../interface/token/itoken.interface';
import { AuthService } from 'src/service/Auth/auth.service';

@Component({
  selector: 'app-a-login',
  templateUrl: './a-login.component.html',
  styleUrls: ['./a-login.component.scss']
})
export class ALoginComponent implements OnInit {

  constructor(private service: LoginService, private auth: AuthService) {

  }
  ngOnInit(): void {}

  public form: FormGroup = new FormGroup ({
    username: new FormControl(''),
    password: new FormControl(''),

  })

  handleSubmit() {
    console.log('test');
    
    this.service.login(this.form.value).subscribe(
      (data:IToken) => {
        console.log(data.token);
        this.auth.saveToken(data.token);
      },
      err => console.log(err)
    )

  }
}
