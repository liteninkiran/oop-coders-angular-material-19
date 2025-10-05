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

const nameValidators = [Validators.required];
const emailValidators = [Validators.required, Validators.email];
const controls = {
    name: ['', nameValidators],
    email: ['', emailValidators],
    message: [''],
    topic: [''],
    priority: ['medium'],
    subscribe: [false],
    contactDate: [null],
};

@Component({
    selector: 'app-contact-us-form',
    imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
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
