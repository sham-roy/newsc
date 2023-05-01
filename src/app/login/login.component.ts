import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service :  ApiService) {}

  id:any
  password:any

  login() {
    var id = this.id
    var password = this.password
    this.service.login(id,password).subscribe((result: any) => {
      alert(result.message)
    },
    result =>{
      alert(result.error)
    })
  }
}
