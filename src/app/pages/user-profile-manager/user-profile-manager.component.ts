import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

type User = {
    name: string;
    bio: string;
};

@Component({
    selector: 'app-user-profile-manager',
    imports: [MatButtonModule, MatCardModule],
    templateUrl: './user-profile-manager.component.html',
    styleUrl: './user-profile-manager.component.scss',
})
export class UserProfileManagerComponent {
    public user: User = {
        name: 'John Doe',
        bio: 'Angular developer & UI designer.',
    };

    public openDialog(): void {}
}
