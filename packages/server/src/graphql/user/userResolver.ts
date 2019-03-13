import { Arg, Mutation, Query, Resolver, UseMiddleware } from 'type-graphql';
import * as bcrypt from 'bcryptjs';
import { User } from '../../entity/User';
import { RegisterInput } from './register/registerInput';
import { isAuth } from '../middleware/isAuth';
import { logger } from '../middleware/logger';
import { sendEmail } from '../utils/sendEmail';
import { createConfirmationUrl } from '../utils/createConfirmationUrl';

@Resolver(User)
export class UserResolver {
	@UseMiddleware(isAuth, logger)
	@Query(() => User)
	async user(@Arg('email') email: string) {
		return User.findOne({ email });
	}

	@Mutation(() => User)
	async register(@Arg('input')
	{
		firstName,
		lastName,
		middleName,
		email,
		password,
		phone,
		avatar
	}: RegisterInput): Promise<User> {
		const hash = await bcrypt.hash(password, 12);
		const user = await User.create({
			firstName,
			lastName,
			middleName,
			email,
			password: hash,
			phone,
			avatar
		}).save();
		await sendEmail(email, await createConfirmationUrl(user.id));
		return user;
	}
}
