import {
	Arg,
	Mutation,
	Query,
	Resolver,
	UseMiddleware,
	Ctx
} from 'type-graphql';
import * as bcrypt from 'bcryptjs';
import { User } from '../../entity/User';
import { RegisterInput } from './register/registerInput';
import { isAuth } from '../middleware/isAuth';
import { logger } from '../middleware/logger';
import { MainContext } from '../types/mainContext';

@Resolver(User)
export class UserResolver {
	@UseMiddleware(isAuth)
	@Query(() => User)
	async user(@Arg('email') email: string) {
		return User.findOne({ email });
	}

	@Mutation(() => User)
	async register(@Arg('data')
	{
		firstName,
		lastName,
		middleName,
		email,
		password,
		phone,
		avatar
	}: RegisterInput): Promise<User> {
		const hash = await bcrypt.hash(password, 10);
		return await User.create({
			firstName,
			lastName,
			middleName,
			email,
			password: hash,
			phone,
			avatar
		}).save();
	}
}
