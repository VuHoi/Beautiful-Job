import { MiddlewareFn } from 'type-graphql';
import { MainContext } from '../types/mainContext';
export const isAuth: MiddlewareFn<MainContext> = async ({ context }, next) => {
	console.log('sss', context.req.session.userId);
	if (!context.req.session!.userId) {
		throw new Error('not authenticated');
	}
	return next();
};
