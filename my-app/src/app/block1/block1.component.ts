import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Block11Component } from './block11/block11.component';


@Component({
  selector: 'block1-root',
  standalone: true,
  imports: [RouterOutlet, Block11Component],
  templateUrl: './block1.component.html',
  styleUrl: './block1.component.css'
})
export class block1Component {
  
}