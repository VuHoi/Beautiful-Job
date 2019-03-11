import { MiddlewareFn } from 'type-graphql';
import { MainContext } from '../types/mainContext';

export const isAuth: MiddlewareFn<MainContext> = async ({ context }, next) => {
	// if (!context.req.session!.userId) {
	//   throw new Error("not authenticated");
	// }

	return next();
};
