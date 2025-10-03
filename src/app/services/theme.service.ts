import { computed, effect, Injectable, signal } from '@angular/core';

export type Colour = 'green' | 'red' | 'blue';
export type Mode = 'light' | 'dark';

const STORAGE_KEY = 'theme-class';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    public mode = signal<Mode>('light');
    public colour = signal<Colour>('green');

    //public currentTheme = computed(() => `${this.mode()}-${this.color()}`)
    public currentTheme = computed(() => this.colour());

    constructor() {
        const saved = localStorage.getItem(STORAGE_KEY) as
            | 'green'
            | 'red'
            | 'blue';
        if (saved) {
            this.colour.set(saved);
        }

        effect(() => {
            document.documentElement.className = this.currentTheme();
            localStorage.setItem(STORAGE_KEY, this.colour());
        });
    }

    setMode(value: 'light' | 'dark') {
        this.mode.set(value);
    }

    setColour(value: 'green' | 'red' | 'blue') {
        this.colour.set(value);
    }
}
