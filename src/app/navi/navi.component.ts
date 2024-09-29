import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DashComponent } from '../dash/dash.component';
import { DragropComponent } from '../dragrop/dragrop.component';
import { TblComponent } from '../tbl/tbl.component';
import { TreeComponent } from '../tree/tree.component';
import { MainComponent } from '../main/main.component';
import { TypoComponent } from '../typo/typo.component';
import { ButtsComponent } from '../butts/butts.component';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrl: './navi.component.css',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    DashComponent,
    DragropComponent,
    TblComponent,
    TreeComponent,
    MainComponent,
    TypoComponent,
    ButtsComponent
  ]
})
export class NaviComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
