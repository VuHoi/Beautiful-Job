import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import * as bcrypt from 'bcryptjs';
import { User } from '../../entity/User';
import { RegisterInput } from './register/registerInput';

@Resolver(User)
export class UserResolver {
	@Query(() => User)
	async user(@Arg('email') email: string) {
		return User.findOne({ email });
	}

	@Mutation(() => User)
	async register(@Arg('input')
	{
		firstName,
		lastName,
		email,
		password
	}: RegisterInput): Promise<User> {
		const hash = await bcrypt.hash(password, 10);
		return await User.create({
			firstName,
			lastName,
			email,
			password: hash
		}).save();
	}
}
