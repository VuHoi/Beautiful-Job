import bcrypt from 'bcryptjs';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { User } from '../../entity/User';
import { MainContext } from '../types/mainContext';

@Resolver()
export class LoginResolver {
	@Mutation(() => User, { nullable: true })
	async login(
		@Arg('email') email: string,
		@Arg('password') password: string,
		@Ctx() ctx: MainContext
	): Promise<User | null> {
		const user = await User.findOne({ where: { email } });
		if (!user) {
			return null;
		}

		const valid = await bcrypt.compare(password, user.password);
		if (!valid) {
			return null;
		}
		if (!user.isConfirmed) {
			return null;
		}
		console.log(ctx.req.session);
		if (ctx.req.session) {
			ctx.req.session.userId = user.id;
		}
		return user;
	}
}
