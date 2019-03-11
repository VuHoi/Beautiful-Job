import { MiddlewareFn } from 'type-graphql';
import { MainContext } from '../types/mainContext';

export const logger: MiddlewareFn<MainContext> = async ({ args }, next) => {
	console.log('args: ', args);

	return next();
};
