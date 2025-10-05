import { Component } from '@angular/core';
import {
    ReactiveFormsModule,
    FormBuilder,
    Validators,
    FormGroup,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

const nameValidators = [Validators.required];
const emailValidators = [Validators.required, Validators.email];
const controls = {
    name: ['John Doe', nameValidators],
    email: ['john.doe@example.net', emailValidators],
    message: ['Hi there. Please pack the order carefully.'],
    topic: ['support'],
    priority: ['medium'],
    subscribe: [true],
    contactDate: ['2025-01-01'],
};

@Component({
    selector: 'app-contact-us-form',
    imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
    ],
    templateUrl: './contact-us-form.component.html',
    styleUrl: './contact-us-form.component.scss',
})
export class ContactUsFormComponent {
    public form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group(controls);
    }

    public onSubmit(): void {
        if (this.form.valid) {
            console.log(this.form.value);
            alert('Message sent!');
        }
    }
}
