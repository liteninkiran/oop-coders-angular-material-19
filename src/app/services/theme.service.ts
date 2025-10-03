import { computed, effect, Injectable, signal } from '@angular/core';

export type Colour = 'green' | 'red' | 'blue';
export type Mode = 'light' | 'dark';

const THEME_COLOUR = 'theme-colour';
const THEME_MODE = 'theme-mode';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    public mode = signal<Mode>('light');
    public colour = signal<Colour>('green');

    public currentTheme = computed(() => `${this.mode()}-${this.colour()}`);

    constructor() {
        const colour = localStorage.getItem(THEME_COLOUR) as Colour;
        if (colour) {
            this.colour.set(colour);
        }

        const mode = localStorage.getItem(THEME_MODE) as Mode;
        if (mode) {
            this.mode.set(mode);
        }

        const setLocalColour = () => {
            document.documentElement.className = this.currentTheme();
            localStorage.setItem(THEME_COLOUR, this.colour());
            localStorage.setItem(THEME_MODE, this.mode());
        };

        effect(setLocalColour);
    }

    public setMode(value: Mode): void {
        this.mode.set(value);
    }

    public setColour(value: Colour): void {
        this.colour.set(value);
    }
}
