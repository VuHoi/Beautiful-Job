import { Field, InputType } from 'type-graphql';
import { IsEmail, Length } from 'class-validator';
import { IsEmailExist } from './IsEmailExistConstraint';

@InputType()
export class RegisterInput {
	@Field()
	@Length(1, 255)
	firstName: string;

	@Field()
	@Length(1, 255)
	lastName: string;

	@Field()
	@Length(1, 255)
	middleName: string;

	@Field()
	@Length(8,11)
	phone: string;

	@Field()
	@IsEmail()
	@IsEmailExist({ message: 'email already exist.' })
	email: string;

	@Field()
	password: string;

	@Field()
	avatar: string;
}
