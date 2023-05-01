import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  id: any
  user_name: any
  password: any

  constructor(private service: ApiService, private router:Router ) {
  }
  
  register() {
    var id = this.id
    var user_name = this.user_name
    var password = this.password

    this.service.register(id, user_name, password).subscribe((result: any) => {
      alert(result.message)
      this.router.navigateByUrl("")
    },
    result=> {
      alert(result.error.message)
    })
  }

}
