import { Component } from '@angular/core';
import { DeafultLoginLayoutComponent } from '../../components/deafult-login-layout/deafult-login-layout.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [DeafultLoginLayoutComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
