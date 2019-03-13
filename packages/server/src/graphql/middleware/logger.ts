import { MiddlewareFn } from 'type-graphql';
import { MainContext } from '../types/mainContext';

export const logger: MiddlewareFn<MainContext> = async ({ args }, next) => {
	return next();
};
