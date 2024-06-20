import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { block1Component } from './block1/block1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, block1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  autor = 'Anton';
}
