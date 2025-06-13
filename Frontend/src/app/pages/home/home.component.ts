import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  user = {
    FirstName:'',
    LastName:'',
    Email:'',
    Password:'',
  }

  submit(){
    alert("Usuário cadastrado!")
  }
}
