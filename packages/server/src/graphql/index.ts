import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './user/userResolver';
import { LoginResolver } from './user/loginResolver';
import { LogoutResolver } from './user/logoutResolver';
import { ConfirmUserResolver } from './user/confirmUserResolver';
import { ChangePasswordResolver } from './user/changePasswordResolve';
import { ForgotPasswordResolver } from './user/forgotPasswordResolve';
import { MeResolver } from './user/meResolver';

export class GraphQL {
	public createSchema = async (): Promise<GraphQLSchema> => {
		return buildSchema({
			resolvers: [
				UserResolver,
				LoginResolver,
				LogoutResolver,
				ConfirmUserResolver,
				ChangePasswordResolver,
				ForgotPasswordResolver,
				MeResolver
			],
			authChecker: ({ context: { req } }) => {
				return !!req.session.userId;
			}
		});
	};
}
