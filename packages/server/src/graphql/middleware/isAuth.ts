import { MiddlewareFn } from 'type-graphql';
import { MainContext } from '../types/mainContext';

export const isAuth: MiddlewareFn<MainContext> = async ({ context }, next) => {
	console.log(context.req.session.userId);
	if (!context.req.session!.userId) {
		throw new Error('not authenticated');
	}
	console.log(context);
	return next();
};
