import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LoaderService {
    private spinnerVisible = signal(false);
    private progressBarVisible = signal(false);

    readonly showSpinner = this.spinnerVisible.asReadonly();
    readonly showProgressBar = this.progressBarVisible.asReadonly();

    public toggleSpinner(value: boolean): void {
        this.spinnerVisible.set(value);
    }

    public toggleProgressBar(value: boolean): void {
        this.progressBarVisible.set(value);
    }

    public startLoading(): void {
        this.toggleSpinner(true);
        this.toggleProgressBar(true);
    }

    public stopLoading(): void {
        this.toggleSpinner(false);
        this.toggleProgressBar(false);
    }
}
