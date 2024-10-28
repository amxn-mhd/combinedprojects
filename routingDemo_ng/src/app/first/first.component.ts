import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChidlAComponent } from './chidl-a/chidl-a.component';
import { ChidlBComponent } from './chidl-b/chidl-b.component';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [RouterOutlet,RouterLink,ChidlAComponent,ChidlBComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

}
