import {
	registerDecorator,
	ValidationOptions,
	ValidatorConstraint,
	ValidatorConstraintInterface
} from 'class-validator';
import { User } from '../../../entity/User';

@ValidatorConstraint({ async: true })
export class IsEmailExistConstraint implements ValidatorConstraintInterface {
	validate(email: string) {
		return User.findOne({ where: { email } }).then(user => {
			return !user;
		});
	}
}

export const IsEmailExist = (validationOptions?: ValidationOptions) => {
	return (object: object, propertyName: string) => {
		registerDecorator({
			propertyName,
			target: object.constructor,
			options: validationOptions,
			constraints: [],
			validator: IsEmailExistConstraint
		});
	};
};
