import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/service/login/login.service';

@Component({
  selector: 'app-a-login',
  templateUrl: './a-login.component.html',
  styleUrls: ['./a-login.component.scss']
})
export class ALoginComponent implements OnInit {

  constructor(private service: LoginService) {

  }
  ngOnInit(): void {}

  public form: FormGroup = new FormGroup ({
    username: new FormControl('joris.bertier@gmail.com'),
    password: new FormControl('root'),

  })

  handleSubmit() {
    console.log('test');
    
    this.service.login(this.form.value).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
