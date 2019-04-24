import { useRef } from 'react';

export type Register = Partial<{
	email: String;
	password: String;
	confirmPassword: String;
	firstName: String;
	lastName: String;
	middleName: String;
}>;

export enum FormControl {
	email = 'email',
	password = 'password',
	confirmPassword = 'confirmPassword',
	firstName = 'firstName',
	lastName = 'lastName',
	middleName = 'middleName'
}

export class ValidateRegister {
	constructor(
		public email: Validate = { valid: false, name: FormControl.email },
		public password: Validate = { valid: false, name: FormControl.password },
		public confirmPassword: Validate = {
			valid: false,
			name: FormControl.confirmPassword
		},
		public firstName: Validate = { valid: false, name: FormControl.firstName },
		public lastName: Validate = { valid: false, name: FormControl.lastName },
		public middleName: Validate = { valid: false, name: FormControl.middleName }
	) {}
}

export class RegisterModel {
	constructor(
		public email = useRef<HTMLInputElement>(null),
		public password = useRef<HTMLInputElement>(null),
		public confirmPassword = useRef<HTMLInputElement>(null),
		public firstName = useRef<HTMLInputElement>(null),
		public lastName = useRef<HTMLInputElement>(null),
		public middleName = useRef<HTMLInputElement>(null)
	) {}
}

export const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const PASSWORD_REGEXP = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
// interface Validate {
//     control: Partial<Record<FormControl, boolean>>;
//     name: FormControl;
// }

interface Validate {
	valid: boolean;
	name: FormControl;
}
