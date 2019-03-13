import { Resolver, Mutation, Ctx, Authorized } from 'type-graphql';
import { MainContext } from '../types/mainContext';

@Resolver()
export class LogoutResolver {
	@Authorized()
	@Mutation(() => Boolean)
	async logout(@Ctx() ctx: MainContext): Promise<Boolean> {
		return new Promise((res, rej) =>
			ctx.req.session!.destroy(err => {
				if (err) {
					console.log(err);
					return rej(false);
				}
				ctx.res.clearCookie(process.env.COOKIE_NAME);
				return res(true);
			})
		);
	}
}
