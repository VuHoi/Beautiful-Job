import { MiddlewareFn } from 'type-graphql';
import { MainContext } from '../types/mainContext';

export const isAuth: MiddlewareFn<MainContext> = async ({ context }, next) => {
	console.log('sss2', context.req.session);
	// if (!context.req.session!.userId) {
	// 	throw new Error('not authenticated');
	// }
	// console.log(context);
	context.req.session.userId = 'hhahahah';
	return next();
};
