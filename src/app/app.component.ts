import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from './navi/navi.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    NaviComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng18-dyn-themes';
}
