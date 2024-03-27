import { Component } from '@angular/core';
import { SHARED } from '../shared';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [SHARED],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

}
