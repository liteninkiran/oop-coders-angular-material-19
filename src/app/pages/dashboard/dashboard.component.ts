import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import {
    BreakpointObserver,
    Breakpoints,
    BreakpointState,
} from '@angular/cdk/layout';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

const mapFn = (state: BreakpointState) => (state.matches ? 1 : 2);

@Component({
    selector: 'app-dashboard',
    imports: [
        MatButtonModule,
        MatButtonToggleModule,
        MatGridListModule,
        CommonModule,
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
    private breakpointObserver = inject(BreakpointObserver);
    private breakpoints = [
        Breakpoints.Small,
        Breakpoints.XSmall,
        Breakpoints.Medium,
    ];
    readonly col$ = this.breakpointObserver
        .observe(this.breakpoints)
        .pipe(map(mapFn));
}
