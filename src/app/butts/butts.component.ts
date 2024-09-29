import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-butts',
  standalone: true,
  imports: [MatDividerModule, MatButtonModule, MatIconModule],
  templateUrl: './butts.component.html',
  styleUrl: './butts.component.css'
})
export class ButtsComponent {

}
