import { Resolver, Query, Ctx } from 'type-graphql';
import { User } from '../../entity/User';
import { MainContext } from '../types/mainContext';

@Resolver()
export class MeResolver {
	@Query(() => User, { nullable: true, complexity: 5 })
	async me(@Ctx() ctx: MainContext): Promise<User | undefined> {
		if (!ctx.req.session!.userId) {
			return undefined;
		}
		return User.findOne(ctx.req.session!.userId);
	}
}
